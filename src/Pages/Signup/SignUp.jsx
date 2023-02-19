import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/UserContext/UserContext';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
    const { createUser, addDisplayName } = useContext(AuthContext);
    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSignUp = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!/[a-zA-Z0-9@$!%*?&]{6,}/.test(password)) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }

        createUser(email, password)
            .then(res => {

                addDisplayName(name)
                    .then(() => {
                        toast("Check your mail and verify.")
                    })

                navigate('/')

            })
            .catch(err => {
                const errorMe = (err.message)
                setError(errorMe)
            })
    };

    return (
        <div className="hero min-h-screen bg-base-200" data-theme="light">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5">
                    <h1 className="text-4xl font-semibold text-center">Please Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            {
                                passwordError && <p className='text-red-600'><small>Password Must be 6 Character</small></p>
                            }
                        </div>
                        {
                            error && <div className='text-red-500'>({error.split('/')[1]}</div>
                        }
                        <div className="form-control mt-3">
                            <input type="submit" value="SIGN UP" className="btn btn-primary" />
                        </div>
                    </form>
                    <div>
                        <SocialLogin />
                        <p className='text-center'>Have an account?<Link className='btn btn-link' to={'/login'}>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
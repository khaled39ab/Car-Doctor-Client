import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/UserContext/UserContext';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(res => {
                // console.log(res.user)
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
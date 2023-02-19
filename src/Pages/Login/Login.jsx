import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/UserContext/UserContext';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { passwordLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || "/";

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        passwordLogin(email, password)
            .then(res => {
                // console.log(res.user)
                navigate(from, { replace: true })
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
                <div className="card w-full max-w-sm shadow-2xl bg-base-100 py-5">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <label className="label flex justify-end">
                                <Link to={''} className="mt-3 text-blue-800 label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        {
                            error && <div className='text-red-500'>({error.split('/')[1]}</div>
                        }
                        <div className="form-control mt-3">
                            <input type="submit" value="LOGIN" className="btn btn-primary" />
                        </div>
                    </form>
                    <div>
                        <SocialLogin />
                        <p className='text-center'>Create an account?<Link className='btn btn-link' to={'/signup'}>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
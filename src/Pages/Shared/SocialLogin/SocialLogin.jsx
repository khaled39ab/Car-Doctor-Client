import React, { useContext, useState } from 'react';
import facebook from '../../../assets/images/social icons/facebook.svg';
import google from '../../../assets/images/social icons/google.svg';
import github from '../../../assets/images/social icons/github.svg';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { googleLogin, githubLogin, facebookLogin, getJWTToken } = useContext(AuthContext);
    const [error, setError] = useState('');

    const from = location.state?.from?.pathname || "/";


    const handleFacebookLogin = () => {
        facebookLogin()
            .then(res => {
                const user = res.user;
                getJWTToken(user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                const errorMe = (err.message)
                setError(errorMe)
            })
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const user = res.user;
                getJWTToken(user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                const errorMe = (err.message)
                setError(errorMe)
            })
    };

    const handleGithubLogin = () => {
        githubLogin()
            .then(res => {
                const user = res.user;
                getJWTToken(user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                const errorMe = (err.message)
                setError(errorMe)
            })
    };

    return (
        <div className='text-center'>
            {
                error && <div className='text-red-500'>({error.split('/')[1]}</div>
            }
            <p className='underline'>Or Sign In with</p>
            <div className='flex justify-center my-5'>
                <img onClick={handleFacebookLogin} className='w-6 cursor-pointer' src={facebook} alt="facebook" />
                <img onClick={handleGoogleLogin} className='w-6 cursor-pointer mx-5' src={google} alt="google" />
                <img onClick={handleGithubLogin} className='w-6 cursor-pointer' src={github} alt="github" />
            </div>
        </div>
    );
};

export default SocialLogin;
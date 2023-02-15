import React, { useContext } from 'react';
import facebook from '../../../assets/images/social icons/facebook.svg';
import google from '../../../assets/images/social icons/google.svg';
import github from '../../../assets/images/social icons/github.svg';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => console.log(res.user))
            .catch(err => console.error(err.message))
    }

    return (
        <div className='text-center'>
            <p className='underline'>Or Sign In with</p>
            <div className='flex justify-center my-5'>
                <img onClick={handleGoogleLogin} className='w-6 cursor-pointer' src={facebook} alt="facebook" />
                <img onClick={handleGoogleLogin} className='w-6 cursor-pointer mx-5' src={google} alt="google" />
                <img onClick={handleGoogleLogin} className='w-6 cursor-pointer' src={github} alt="github" />
            </div>
        </div>
    );
};

export default SocialLogin;
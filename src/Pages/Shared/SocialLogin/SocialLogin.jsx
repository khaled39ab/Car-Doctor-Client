import React from 'react';
import facebook from '../../../assets/images/social icons/facebook.svg';
import google from '../../../assets/images/social icons/google.svg';
import github from '../../../assets/images/social icons/github.svg';

const SocialLogin = () => {
    return (
        <div className='text-center'>
            <p className='underline'>Or Sign In with</p>
            <div className='flex justify-center my-5'>
                <img className='w-6' src={facebook} alt="" />
                <img className='w-6 mx-5' src={google} alt="" />
                <img className='w-6' src={github}alt="" />
            </div>
        </div>
    );
};

export default SocialLogin;
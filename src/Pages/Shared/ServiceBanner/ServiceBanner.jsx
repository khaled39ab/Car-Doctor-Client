import React from 'react';
import img from '../../../assets/images/checkout/checkout.png';
import './ServiceBanner.css';

const ServiceBanner = ({pageName}) => {
    return (
        <div className="carousel w-full relative my-12">
            <div className="carousel-item w-full banner-img">
                <img src={img} alt='' className="w-full" />
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-16 top-1/2">
                <h1 className='lg:text-5xl md:text-3xl sm:text-2xl font-bold text-white'>
                    {pageName}
                </h1>
            </div>
            <div className="absolute left-2/4 bottom-0 bg-[#ff3811] px-5 py-1 rounded-t-box">
                <p className='text-white'>
                    Home/ {pageName}
                </p>
            </div>
        </div>
    );
};

export default ServiceBanner;
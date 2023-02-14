import React from 'react';
import star from '../../../assets/images/products/star.svg';
import quote from '../../../assets/icons/quote.svg';
import person from '../../../assets/images/quote-person.jpg'

const Testimonial = () => {
    return (
        <div className='my-10'>
            <div className='text-center'>
                <p className="text-xl font-bold text-orange-600">Testimonial</p>
                <h1 className='text-5xl py-5 text-black'>What Customer Says</h1>
                <p className='w-3/5 mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
            </div>
            <div className='my-6 relative flex justify-center w-full'>
                
                <div className="card w-96 bg-base-100 shadow-xl py-5 px-8">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
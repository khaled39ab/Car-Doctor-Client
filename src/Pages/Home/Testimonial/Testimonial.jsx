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
                <div className="card w-96 bg-base-100 shadow-xl py-5 px-8 mr-5">
                    <div className="card-body">
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <div className='mr-3 h-12 w-10 pt-2'>
                                    <img className=' rounded-full w-full h-full' src={person} alt="" />
                                </div>
                                <div>
                                    <h3 className="card-title">Awlad Hossain</h3>
                                    <p className="">Businessman</p>
                                </div>
                            </div>
                            <img className='h-12 bg-red-300 opacity-20 p-2 rounded-md' src={quote} alt="" />
                        </div>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
                        <div className="card-actions justify-start flex">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl py-5 px-8 mr-5">
                    <div className="card-body">
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <div className='mr-3 h-12 w-10 pt-2'>
                                    <img className=' rounded-full w-full h-full' src={person} alt="" />
                                </div>
                                <div>
                                    <h3 className="card-title">Awlad Hossain</h3>
                                    <p className="">Businessman</p>
                                </div>
                            </div>
                            <img className='h-12 bg-red-300 opacity-20 p-2 rounded-md' src={quote} alt="" />
                        </div>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
                        <div className="card-actions justify-start flex">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="/" className="btn btn-circle">❮</a>
                    <a href="/" className="btn btn-circle bg-red-500">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
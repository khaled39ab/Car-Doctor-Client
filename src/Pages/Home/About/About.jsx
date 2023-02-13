import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero py-10 bg-gray-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={parts} alt='' className="w-3/5 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8" />
                </div>
                <div className='w-1/2'>
                    <p className='text-2xl font-bold text-orange-600'>About Us</p>
                    <h1 className="text-4xl font-bold">
                        We are qualified <br />
                        & of experience <br />
                        in this field
                    </h1>
                    <p className="py-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
                    <p className="pb-5">The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
                    <button className="btn btn-active btn-secondary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
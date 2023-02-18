import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ service }) => {
    const { _id, title } = service;
    return (
        <div>
            <div className="rounded-md py-3 px-10 bg-white my-3 cursor-pointer">
                <Link to={`/service/${_id}`} >
                    <div className='flex justify-between'>
                        <h1 className='font-bold'>{title}</h1>
                        <p className='text-[#ff3811] text-xl'>❯</p>
                    </div>
                </Link>
            </div>
        </div >
    );
};

export default ServiceItem;
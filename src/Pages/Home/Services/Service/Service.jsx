import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, title, img, price } = service;

    return (
        <div className="card  w-72 h-full bg-gray-200 shadow-xl">
            <figure><img className='w-11/12 my-4' src={img} alt="servicing" /></figure>
            <div className="card-body">
                <h2 className="card-title absolute flex justify-start left-5 top-3/4">
                    {title}
                </h2>
                <div className="card-actions flex justify-between absolute  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <p className="text-red-400 font-bold">Price: ${price}</p>
                    <div className="badge badge-outline bg-red-500 border-none text-white cursor-pointer"><Link to={`/service/${_id}`}>Go ❯</Link></div>
                </div>
            </div>
        </div>
    );
};

export default Service;
import React from 'react';

const Service = ({service}) => {
    const {title, img, price} = service;
    return (
        <div className="card  w-72 h-full bg-gray-200 shadow-xl">
            <figure><img className='w-11/12 mt-3' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <div className="card-actions justify-between">
                    <p className="text-orange-600">Price: ${price}</p>
                    <div className="badge badge-outline">❯</div>
                </div>
            </div>
        </div>
    );
};

export default Service;
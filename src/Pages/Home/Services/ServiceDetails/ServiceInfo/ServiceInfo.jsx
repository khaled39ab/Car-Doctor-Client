import React from 'react';
import Facility from './Facility/Facility';

const ServiceInfo = ({ service }) => {
    const { title, img, description, facility } = service;

    return (
        <div className="card card-compact w-full bg-gray-200 shadow-xl my-5 lg:my-10 p-5">
            <figure><img src={img} alt="img" /></figure>
            <div className="card-body">
                <div className='my-3'>
                    <h2 className="card-title text-3xl font-extrabold">{title}</h2>
                    <p className='leading-7 my-5'>{description}</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {
                        facility.map((facilities, index) => <Facility
                            key={index}
                            facilities={facilities}
                        ></Facility>)
                    }
                </div>
                <div className='my-5'>
                    <p className='leading-7'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;
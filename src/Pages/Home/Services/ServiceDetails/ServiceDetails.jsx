import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceItems from '../ServiceDetails/ServiceItems/ServiceItems';
import ServiceInfo from './ServiceInfo/ServiceInfo';


const ServiceDetails = () => {
    const service = useLoaderData();
    const { price } = service;

    return (
        <div className='grid grid-cols-3 px-5'>
            <div className='col-span-2 mr-3'>
                <ServiceInfo service={service} />
            </div>
            <div className='col-span-1'>
                <ServiceItems />
                <div className='text-center'>
                    <h1 className='text-4xl font-bold'>Price: ${price}</h1>
                    <button className="btn btn-block mt-7 bg-[#ff3811]"><Link>Proceed Checkout</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
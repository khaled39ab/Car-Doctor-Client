import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceBanner from '../../../Shared/ServiceBanner/ServiceBanner';
import ServiceItems from '../ServiceDetails/ServiceItems/ServiceItems';
import ServiceInfo from './ServiceInfo/ServiceInfo';


const ServiceDetails = () => {
    const service = useLoaderData();
    const { price } = service;

    return (
        <div>
            <ServiceBanner pageName={"Service Details"} />
            <div className='grid grid-cols-3 px-5'>
                <div className='col-span-2 mr-3'>
                    <ServiceInfo service={service} />
                </div>
                <div className='col-span-1'>
                    <ServiceItems />
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold'>Price: ${price}</h1>
                        <Link to={'/checkout'} state={{ service }} className="btn btn-block mt-7 bg-[#ff3811]">Proceed Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
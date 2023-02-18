import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceItems from '../ServiceDetails/ServiceItems/ServiceItems';
import ServiceInfo from './ServiceInfo/ServiceInfo';


const ServiceDetails = () => {
    const service = useLoaderData();

    return (
        <div className='grid grid-cols-3 p-5'>
            <div className='col-span-2 mr-2'>
                <ServiceInfo service={service}/>
            </div>
            <div className='col-span-1'>
                <ServiceItems />
            </div>
        </div>
    );
};

export default ServiceDetails;
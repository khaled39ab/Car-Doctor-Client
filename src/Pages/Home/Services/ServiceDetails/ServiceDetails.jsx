import React from 'react';
import ServiceItems from '../ServiceDetails/ServiceItems/ServiceItems';
import ServiceInfo from './ServiceInfo/ServiceInfo';


const ServiceDetails = () => {
    return (
        <div className='grid grid-cols-3'>
            <div className='col-span-2'>
                <ServiceInfo />
            </div>
            <div className='col-span-1'>
                <ServiceItems />
            </div>
        </div>
    );
};

export default ServiceDetails;
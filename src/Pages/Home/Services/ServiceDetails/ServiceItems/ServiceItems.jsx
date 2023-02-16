import React, { useContext } from 'react';
import { ItemsContext } from '../../../../../Context/ServicesContext/ServicesContext';
import ServiceItem from './ServiceItem';

const ServiceItems = () => {

    const { services } = useContext(ItemsContext);

    return (
        <div className='my-5 lg:my-10'>
            <div className="flex flex-col w-full bg-base-200 p-10">
                {
                    services.map(service => <ServiceItem
                        key={service._id}
                        service={service}
                    ></ServiceItem>)
                }
            </div>
        </div>
    );
};

export default ServiceItems;
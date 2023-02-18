import React, { useContext } from 'react';
import { ItemsContext } from '../../../../../Context/ServicesContext/ServicesContext';
import ServiceItem from '../ServiceItems/ServiceItem/ServiceItem';

const ServiceItems = () => {

    const { services } = useContext(ItemsContext);

    return (
        <div className='my-5 lg:my-10'>
            <div className="flex flex-col w-full bg-base-200 md:p-10 p-5">
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
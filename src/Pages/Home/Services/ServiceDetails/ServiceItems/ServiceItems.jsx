import React, { useContext } from 'react';
import { ItemsContext } from '../../../../../Context/ServicesContext/ServicesContext';
import ServiceItem from './ServiceItem';

const ServiceItems = () => {

    const { serviceModule } = useContext(ItemsContext);
    console.log(serviceModule);

    return (
        <div className="flex flex-col w-full">
            {
                serviceModule.map(service => <ServiceItem
                    key={service._id}
                    service = {service}
                ></ServiceItem>)
            }
        </div>
    );
};

export default ServiceItems;
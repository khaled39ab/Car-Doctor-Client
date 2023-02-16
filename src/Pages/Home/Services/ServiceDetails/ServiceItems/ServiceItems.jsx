import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';

const ServiceItems = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    console.log(services);
    return (
        <div className="flex flex-col w-full">
            {/* <ServiceItem /> */}
        </div>
    );
};

export default ServiceItems;
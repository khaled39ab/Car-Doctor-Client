import React, { useContext, useEffect, useState } from 'react';
import { ServiceContext } from '../../../../../Context/ServicesContext/ServicesContext';
import { AuthContext } from '../../../../../Context/UserContext/UserContext';
import ServiceItem from './ServiceItem';

const ServiceItems = () => {

    const {serviceModule} = useContext(ServiceContext);
    
    return (
        <div className="flex flex-col w-full">
            {/* <ServiceItem /> */}
        </div>
    );
};

export default ServiceItems;
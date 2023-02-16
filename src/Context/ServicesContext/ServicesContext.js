import React, { useEffect, useState } from 'react';
import { createContext } from "react";


export const ServiceContext = createContext();

const ServicesContext = ({children}) => {
    const [serviceModule, setServicesModule] = useState({});

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServicesModule(data))
    }, []);


    const ServiceInfo = {
        serviceModule
    }

    return (
        <ServiceContext.Provider value={ServiceInfo}>
            {children}
        </ServiceContext.Provider>
    );
};

export default ServicesContext;
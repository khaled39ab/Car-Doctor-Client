import React, { useEffect, useState } from 'react';
import { createContext } from "react";

export const ServiceContext = createContext();


const ServicesContext = ({children}) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <ServiceContext>
            {children}
        </ServiceContext>
    );
};

export default ServicesContext;
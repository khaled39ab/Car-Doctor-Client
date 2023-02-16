import React, { useEffect, useState } from 'react';
import { createContext } from "react";


export const ItemsContext = createContext();

const ServicesContext = ({children}) => {
    const [serviceModule, setServiceModule] = useState({});

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServiceModule(data))
    }, []);


    const ItemsInfo = {
        serviceModule
    }

    return (
        <ItemsContext.Provider value={ItemsInfo}>
            {children}
        </ItemsContext.Provider>
    );
};

export default ServicesContext;
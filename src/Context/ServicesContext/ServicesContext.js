import React, { useEffect, useState } from 'react';
import { createContext } from "react";


export const ItemsContext = createContext();

const ServicesContext = ({children}) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // fetch('services.json')
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, []);


    const ItemsInfo = {
        services
    }

    return (
        <ItemsContext.Provider value={ItemsInfo}>
            {children}
        </ItemsContext.Provider>
    );
};

export default ServicesContext;
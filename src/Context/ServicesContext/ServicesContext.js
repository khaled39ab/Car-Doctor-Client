import React, { useEffect, useState } from 'react';
import { createContext } from "react";


export const ItemsContext = createContext();

const ServicesContext = ({ children }) => {
    const [services, setServices] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-server-sandy.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, []);


    useEffect(() => {
        fetch('https://car-doctor-server-sandy.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const ItemsInfo = {
        services,
        products
    }

    return (
        <ItemsContext.Provider value={ItemsInfo}>
            {children}
        </ItemsContext.Provider>
    );
};

export default ServicesContext;
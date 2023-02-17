import React, { useEffect, useState } from 'react';
import { createContext } from "react";


export const ItemsContext = createContext();

const ServicesContext = ({ children }) => {
    const [services, setServices] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, []);


    useEffect(() => {
        fetch('http://localhost:4000/products')
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
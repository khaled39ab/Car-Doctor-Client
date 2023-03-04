import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../UserContext/UserContext';

export const OrderListContext = createContext()

const OrderContext = ({ children }) => {

    // const { user, logOut } = useContext(AuthContext);

    const [orders, setOrders] = useState([]);

    /* 
        useEffect(() => {
            const uri = `https://car-doctor-server-sandy.vercel.app/orders?email=${user?.email}`;
    
            fetch(uri, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('car-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setOrders(data);
                });
    
        }, [user?.email]);
    
    */

    const OrderList = {
        orders,
        setOrders
    }

    return (
        <OrderListContext.Provider value={OrderList}>
            {children}
        </OrderListContext.Provider>
    );
};

export default OrderContext;
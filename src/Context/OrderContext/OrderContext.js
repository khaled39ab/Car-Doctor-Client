import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../UserContext/UserContext';

export const OrderListContext = createContext()

const OrderContext = ({ children }) => {

    const { user } = useContext(AuthContext);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const uri = `http://localhost:4000/orders?email=${user?.email}`;

        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })

    }, [user?.email]);


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
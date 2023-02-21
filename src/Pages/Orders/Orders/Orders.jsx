import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import Order from '../Order/Order';

const Orders = () => {
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


    return (
        <div className="overflow-x-auto w-full my-10">
            <h2 className='text-3xl text-center text-blue-500 mb-5'>Your orders count: {orders.length}</h2>
            <table className="table w-full">

                {
                    orders.map(order => <Order
                        key={order._id}
                        order={order}
                    ></Order>)
                }
            </table>
        </div>
    );
};

export default Orders;
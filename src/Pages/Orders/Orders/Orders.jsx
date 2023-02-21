import React, { useContext } from 'react';
import { OrderListContext } from '../../../Context/OrderContext/OrderContext';
import Order from '../Order/Order';

const Orders = () => {
    const { orders } = useContext(OrderListContext);

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
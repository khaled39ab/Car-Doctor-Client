import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { OrderListContext } from '../../../Context/OrderContext/OrderContext';
import Order from '../Order/Order';

const Orders = () => {
    const { orders, setOrders } = useContext(OrderListContext);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to cancel this order');

        if (proceed) {
            fetch(`http://localhost:4000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast("Order Cancel Successfully")
                        const remaining = orders.filter(odr => odr._id !== id)
                        setOrders(remaining)
                    }
                })
        }
    };

    const handleStatusUpdate = id => {

        fetch(`http://localhost:4000/orders/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.modifiedCount > 0){
                    const remaining = orders.filter(odr => odr._id !== id)
                const approving = orders.find(odr => odr._id === id)
                approving.status = "Approved";

                const newOrder = [approving, ...remaining]
                setOrders(newOrder)
                }
            })
    };


    return (
        <div className="overflow-x-auto w-full my-10">
            <h2 className='text-3xl text-center text-blue-500 mb-5'>Your have {orders.length} Orders</h2>

            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <button disabled className="btn btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </label>
                        </th>
                        <th className='font-bold text-lg'>Service Name</th>
                        <th className='font-bold text-lg'>Customer Name</th>
                        <th className='font-bold text-lg'>Price</th>
                        <th className='font-bold text-lg'>Status</th>
                    </tr>
                </thead>

                {
                    orders.map(order => <Order
                        key={order._id}
                        order={order}
                        handleDelete={handleDelete}
                        handleStatusUpdate={handleStatusUpdate}
                    ></Order>)
                }
                
            </table>

        </div>
    );
};

export default Orders;
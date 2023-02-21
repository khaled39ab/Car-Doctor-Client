import React, { useEffect, useState } from 'react';

const Order = ({ order }) => {
    const { serviceId, name, service, branch, price, phone, status } = order; //imagine value status
    const [orderService, setOrderService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [serviceId])

    return (
        <tbody>
            <tr className="hover">
                <th>
                    <label>
                        <button className="btn btn-circle btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded w-20 h-16">
                                <img src={orderService.img} alt="services " />
                            </div>
                        </div>
                        <div>
                            <div className="text-lg font-bold">{service}</div>
                            <div className="text-lg bg-opacity-75">{branch}</div>
                        </div>
                    </div>
                </td>
                <td className='font-semibold'>
                    {name}
                    <br />
                    <span className="badge badge-ghost badge-md">{phone}</span>
                </td>
                <td className='font-bold'>{price}</td>
                <th >
                    {
                        status ?
                            <button className="btn btn-success btn-xs">Approved</button> :
                            <button className="btn btn-warning btn-xs">Pending</button>
                    }
                </th>
            </tr>
        </tbody>
    );
};

export default Order;
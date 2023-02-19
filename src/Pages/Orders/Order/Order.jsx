import React from 'react';

const Order = ({order}) => {
    const {name, service, address, price, phone} = order;
    
    return (
        <tbody>
            <tr className="hover">
                <th>
                    <label>
                        <button className="btn btn-circle btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{service}</div>
                            <div className="text-sm opacity-50">{address}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {name}
                    <br />
                    <span className="badge badge-ghost badge-sm">{phone}</span>
                </td>
                <td>{price}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">Pending</button>
                </th>
            </tr>
        </tbody>
    );
};

export default Order;
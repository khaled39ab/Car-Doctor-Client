import React, { useContext } from 'react';
import { ItemsContext } from '../../../../../Context/ServicesContext/ServicesContext';

const ServiceInfo = () => {
    const { services } = useContext(ItemsContext);
    const { img } = services;

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl my-5 lg:my-10 p-5">
            <figure><img src={img} alt="img" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default ServiceInfo;
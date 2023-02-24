import React, { useContext } from 'react';
import { ItemsContext } from '../../../../Context/ServicesContext/ServicesContext';
import Service from '../Service/Service';

const Services = () => {

    const { services } = useContext(ItemsContext);

    return (
        <div>
            <div className='text-center'>
                <p className="text-xl font-bold text-orange-600">Services</p>
                <h1 className='text-5xl py-5 text-black'>Our Service Area</h1>
                <p className='w-3/5 mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 mx-auto'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>            
        </div>
    );
};

export default Services;
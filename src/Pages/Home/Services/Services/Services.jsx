import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="text-center py-10 bg-neutral-100">
            <div>
                <p className="text-xl font-bold text-orange-600">Services</p>
                <h1 className='text-5xl py-5 text-black'>Our Service Area</h1>
                <p className='w-3/5 mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
            </div>
            <div>
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
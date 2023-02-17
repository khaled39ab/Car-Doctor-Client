import React from 'react';

const ServiceItem = ({service}) => {
    return (
        <div>
            <div className="rounded-md py-4 px-10 bg-white my-3 cursor-pointer">
                <div className='flex justify-between'>
                    <h1 className='font-bold'>{service.title}</h1>
                    <p className='text-[#ff3811] text-xl'>❯</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;
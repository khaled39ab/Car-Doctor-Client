import React from 'react';

const ServiceItem = ({service}) => {
    return (
        <div>
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">{service.title}</div>
            <div className="divider"></div>
        </div>
    );
};

export default ServiceItem;
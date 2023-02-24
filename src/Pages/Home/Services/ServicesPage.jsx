import React from 'react';
import ServiceBanner from '../../Shared/ServiceBanner/ServiceBanner';
import Services from './Services/Services';

const ServicesPage = () => {
    return (
        <div>
            <ServiceBanner pageName={"Services"}/>
            <Services />
        </div>
    );
};

export default ServicesPage;
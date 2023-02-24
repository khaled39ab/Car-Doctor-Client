import React from 'react';
import ServiceBanner from '../../Shared/ServiceBanner/ServiceBanner';
import Products from './Products/Products';

const ProductsPage = () => {
    return (
        <div>
            <ServiceBanner pageName={"Products"} />
            <Products />
        </div>
    );
};

export default ProductsPage;
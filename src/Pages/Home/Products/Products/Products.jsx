import React, { useContext } from 'react';
import { ItemsContext } from '../../../../Context/ServicesContext/ServicesContext';
import Product from '../Product/Product';

const Products = () => {
    const { products } = useContext(ItemsContext);

    return (
        <div>
            <div className='text-center'>
                <p className="text-xl font-bold text-orange-600">Popular Products</p>
                <h1 className='text-5xl py-5 text-black'>Browse Our Products</h1>
                <p className='w-3/5 mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 mx-auto p-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;
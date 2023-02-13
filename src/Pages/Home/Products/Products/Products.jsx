import React from 'react';

const Products = () => {
    return (
        <div className="py-10 bg-neutral-100">
            <div className='text-center'>
                <p className="text-xl font-bold text-orange-600">Popular Products</p>
                <h1 className='text-5xl py-5 text-black'>Browse Our Products</h1>
                <p className='w-3/5 mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 mx-auto'>
                
            </div>
            <div className='text-center my-10'>
                <button className="btn btn-outline btn-secondary">More Services</button>
            </div>
        </div>
    );
};

export default Products;
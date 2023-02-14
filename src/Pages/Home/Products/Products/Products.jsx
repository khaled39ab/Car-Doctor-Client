import React from 'react';
// import img1 from '../../../../assets/images/products/1.png';
// import img2 from '../../../../assets/images/products/2.png';
// import img3 from '../../../../assets/images/products/3.png';
// import img4 from '../../../../assets/images/products/4.png';
// import img5 from '../../../../assets/images/products/5.png';
// import img6 from '../../../../assets/images/products/6.png';
import Product from '../Product/Product';

const Products = () => {
    return (
        <div className="py-10 bg-neutral-100">
            <div className='text-center'>
                <p className="text-xl font-bold text-orange-600">Popular Products</p>
                <h1 className='text-5xl py-5 text-black'>Browse Our Products</h1>
                <p className='w-3/5 mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 mx-auto'>
                {
                    <Product />
                }
            </div>
            <div className='text-center my-10'>
                <button className="btn btn-outline btn-secondary">More Products</button>
            </div>
        </div>
    );
};

export default Products;
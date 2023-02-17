import React from 'react';
import star from '../../../../assets/images/products/star.svg';

const Product = ({ product }) => {
    const { img, title, price } = product;

    return (
        <div className="card w-auto bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 bg-slate-200">
                <img src={img} alt="Parts" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <div className='flex'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
                <h2 className="card-title">{title}</h2>
                <p className="text-red-400 font-bold">Price: ${price}</p>
            </div>
        </div>
    );
};

export default Product;
import React from 'react';
import img1 from '../../../../assets/images/products/1.png';
import img2 from '../../../../assets/images/products/2.png';
import img3 from '../../../../assets/images/products/3.png';
import img4 from '../../../../assets/images/products/4.png';
import img5 from '../../../../assets/images/products/5.png';
import img6 from '../../../../assets/images/products/6.png';

const Product = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
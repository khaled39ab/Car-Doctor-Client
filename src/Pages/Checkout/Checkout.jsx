import React from 'react';
import ServiceBanner from '../Shared/ServiceBanner/ServiceBanner';

const Checkout = () => {
    return (
        <div className='p-8'>
            <div>
                <ServiceBanner pageName={"Checkout"} />
            </div>
            <form className='bg-base-200 py-14 px-10 rounded-md'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5 '>
                    <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                    <input type="text" placeholder="Your Email" className="input input-bordered w-full" />
                    <input type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                    <input type="text" placeholder="Your Address" className="input input-bordered w-full" />
                </div>
                <textarea placeholder="Message" className="textarea textarea-bordered textarea-lg w-full m-5" ></textarea>
                <button className="btn btn-block mt-7 bg-[#ff3811]">Order Confirm</button>
            </form>
        </div>
    );
};

export default Checkout;
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';
import ServiceBanner from '../Shared/ServiceBanner/ServiceBanner';

const Checkout = () => {
    const location = useLocation();

    const { title, price } = location.state;
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;

    
    const handlePlaceOrder = e => {
        e.preventDefault();

    };

    return (
        <div className='px-8 my-5'>
            <ServiceBanner pageName={"Checkout"} />
            <div className='my-5'>
                <form onSubmit={handlePlaceOrder} className='bg-base-200 py-14 px-10 rounded-md'>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5 '>
                        <input defaultValue={displayName} type="text" placeholder="Your Name" className="input input-bordered w-full" readOnly />

                        <input defaultValue={email} type="text" placeholder="Your Email" className="input input-bordered w-full" readOnly />

                        <input defaultValue={`Service: ${title}`} type="text" placeholder="Service name" className="input input-bordered w-full" readOnly />

                        <input defaultValue={`Service: $${price}`} type="text" placeholder="Price" className="input input-bordered w-full" readOnly />

                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full" required />

                        <input type="text" placeholder="Your Address" className="input input-bordered w-full" />
                    </div>

                    <textarea placeholder="Message" className="textarea textarea-bordered textarea-lg w-full mt-5" ></textarea>

                    <button type='submit' className="btn btn-block mt-7 bg-[#ff3811]">Order Confirm</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
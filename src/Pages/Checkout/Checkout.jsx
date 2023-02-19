import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext/UserContext';
import ServiceBanner from '../Shared/ServiceBanner/ServiceBanner';

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { title, price } = location.state;

    const { user } = useContext(AuthContext);
    const { displayName, email } = user;

    const [wrong, setWrong] = useState(false);


    const handlePlaceOrder = e => {
        e.preventDefault();

        const form = e.target;
        const phone = form.phone.value;
        const address = form.address.value;
        const message = form.message.value;

        if (phone.length < 10) {
            return setWrong(true)
        };

        const order = {
            name: displayName,
            service: title,
            email,
            phone,
            address,
            message
        };

        fetch('http://localhost:4000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        });

        form.reset();
        toast('Thanks for Your Order')
        navigate('/services')
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

                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full" required />
                        {
                            wrong && <p className='text-red-600'><small>Phone Number Invalid</small></p>
                        }

                        <input name='address' type="text" placeholder="Your Address" className="input input-bordered w-full" />
                    </div>

                    <textarea name='message' placeholder="Message" className="textarea textarea-bordered textarea-lg w-full mt-5" ></textarea>

                    <button type='submit' className="btn btn-block mt-7 bg-[#ff3811]">Order Confirm</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
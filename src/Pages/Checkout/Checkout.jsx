import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext/UserContext';
import ServiceBanner from '../Shared/ServiceBanner/ServiceBanner';

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { _id, title, price } = location.state;

    const { user } = useContext(AuthContext);
    const { displayName, email } = user;

    const [wrongNum, setWrongNum] = useState(false);


    const handlePlaceOrder = e => {
        e.preventDefault();

        const form = e.target;
        const phone = form.phone.value;
        const branch = form.branch.value;
        const message = form.message.value;

        const order = {
            serviceId: _id,
            name: displayName,
            service: title,
            email,
            price,
            phone,
            branch,
            message
        };

        if (phone.length > 8 && phone.startsWith(0)) {
            fetch('http://localhost:4000/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        form.reset();
                        toast('Thanks for Your Order')
                        navigate('/services')
                    }
                })
                .catch(err => console.log(err));
        } else {
            return setWrongNum(true);
        }
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
                            wrongNum && <p className='text-red-600'>Phone Number Invalid</p>
                        }

                        <select name='branch' className="select w-full" defaultValue={''} required>
                            <option value={''} disabled hidden>Select Our Service Branch</option>
                            <option value={'Azimpur'}>Azimpur</option>
                            <option value={'Main'}>Uttara</option>
                            <option value={'Mohakhali'}>Mohakhali</option>
                            <option value={'Mirpur'}>Mirpur</option>
                            <option value={'Norda'}>Norda</option>
                        </select>
                    </div>

                    <textarea name='message' placeholder="Message" className="textarea textarea-bordered textarea-lg w-full mt-5" ></textarea>

                    <button type='submit' className="btn btn-block mt-7 bg-[#ff3811]">Order Confirm</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
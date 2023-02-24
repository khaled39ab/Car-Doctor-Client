import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner/Banner';
import Services from '../Services/Services/Services';
import Contact from '../Contact/Contact';
import Products from '../Products/Products/Products';
import Testimonial from '../Testimonial/Testimonial';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <div>
                {
                    <Services />
                }
                <div className='text-center mb-10'>
                    <button className="btn btn-outline btn-secondary"><Link to={'/services'}>More Services</Link></button>
                </div>
            </div>
            <Contact />
            <Products />
            <Testimonial />

            <ToastContainer />
        </div>
    );
};

export default Home;
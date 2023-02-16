import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner/Banner';
import Services from '../Services/Services/Services';
import Contact from '../Contact/Contact';
import Products from '../Products/Products/Products';
import Testimonial from '../Testimonial/Testimonial';
import ServiceItems from '../Services/ServiceDetails/ServiceItems/ServiceItems';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <Contact />
            <Products />
            <Testimonial />
            <ServiceItems />
        </div>
    );
};

export default Home;
import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner/Banner';
import Services from '../Services/Services/Services';
import Contact from '../Contact/Contact';
import Products from '../Products/Products/Products';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <Contact />
            <Products />
        </div>
    );
};

export default Home;
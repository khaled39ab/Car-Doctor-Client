import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services/Services';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <Contact />
        </div>
    );
};

export default Home;
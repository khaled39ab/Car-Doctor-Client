import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import logo from '../../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="footer p-28 bg-slate-700 text-white">
            <ToastContainer />
            <div>
                <img className='bg-white' src={logo} alt="" />
                <p>Car Doctor (Servicing) Co.<br />Providing reliable service since 2020</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link to={'/services'} className="link link-hover">Services</Link>
                <Link to={'/products'} className="link link-hover">Products</Link>
                <Link to={'/marketing'} className="link link-hover">Marketing</Link>
                <Link to={'/advertisement'} className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to={'/about'} className="link link-hover">About us</Link>
                <Link to={'/contact'} className="link link-hover">Contact</Link>
                <Link to={'/jobs'} className="link link-hover">Jobs</Link>
                <Link to={'/kit'} className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link to={'/terms'} className="link link-hover">Terms of use</Link>
                <Link to={'/policy'} className="link link-hover">Privacy policy</Link>
                <Link to={'/cookie'} className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;
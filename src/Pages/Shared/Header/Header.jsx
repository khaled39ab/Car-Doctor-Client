import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../Context/UserContext/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const name = (user?.displayName)?.split(' ')[0];
    const img = user?.photoURL;

    const handleLogOut = () => {
        logOut();
    }

    const itemMenu = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/services'}>Services</Link></li>
        <li><Link to={'/products'}>Products</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
    </>
    return (
        <div className="navbar h-20 bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {itemMenu}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                    <img className='max-h-12' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {itemMenu}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0} className="btn btn-outline rounded-btn">
                                <img className='h-8 rounded-full mr-2' src={img} alt="" />
                                {name}
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-1 font-bold">
                                <li><Link to={'/orders'}>Orders</Link></li>
                                <li><Link to={'/update'}>Update Profile</Link></li>
                                <li><button onClick={handleLogOut} className="btn  btn-secondary">Log Out</button></li>
                            </ul>
                        </div>
                        :
                        <Link to={'/login'} className="btn btn-outline btn-secondary">Log In</Link>
                }
            </div>
        </div>
    );
};

export default Header;
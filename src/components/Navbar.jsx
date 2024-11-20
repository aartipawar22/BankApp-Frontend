import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">MyBank</h1>
            <ul className="nav-links">
                <li><Link to="/landing">Home</Link></li>
                <li><Link to="/personal">Personal</Link></li>
                <li><Link to="/transaction">Transactions</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

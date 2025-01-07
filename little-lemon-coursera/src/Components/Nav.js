import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Book a Table</Link></li>
                <li><Link to="/order">Order</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                
            </ul>
        </nav>
    );
}

export default Nav;
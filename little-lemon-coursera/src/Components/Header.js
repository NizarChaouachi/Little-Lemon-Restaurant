import React from 'react';
import logo from './assets/Logo.svg'; // Adjust path if necessary

function Header() {
    return (
        <header>
            <h1>Little Lemon</h1>
            <img src={logo} alt="Little Lemon Logo" />
        </header>
    );
}

export default Header;
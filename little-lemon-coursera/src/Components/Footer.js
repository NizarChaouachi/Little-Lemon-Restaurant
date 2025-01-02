import React from 'react';
import logo from "./assets/Logo1.svg"
function Footer() {
    return (
        <footer>
            <img src={logo} alt="Little Lemon Logo" />
            <p>&copy; 2025 Little Lemon. All rights reserved.</p>
            <section>
                <h2>Contact</h2>
            </section>
            <section>
                <h2>Social Media</h2>
            </section>
        </footer>
    );
}

export default Footer;
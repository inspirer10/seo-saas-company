import React from 'react';
import { IoLogoWebComponent } from 'react-icons/io5';

function Navbar() {
    return (
        <nav>
            <div className='logo-wrapper'>
                <IoLogoWebComponent className='logo-icon' /> <span>SEO</span>
            </div>

            <div className='links-wrapper'>
                <p>About</p>
                <p>Pricing</p>
                <p>Roadmap</p>
                <p>Blog</p>
            </div>

            <button>Contact Us</button>
        </nav>
    );
}

export default Navbar;

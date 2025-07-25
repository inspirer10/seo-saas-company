import React from 'react';
import { IoLogoWebComponent } from 'react-icons/io5';
import { FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

function Footer() {
    return (
        <footer>
            <main className='footer-container'>
                <div className='wrapper'>
                    <p className='logo-wrapper'>
                        <IoLogoWebComponent className='logo-icon' />
                        <span>SEO</span>
                    </p>

                    <p className='address'>
                        Level 1, 12 Sample St <br />
                        Sydney nsw 200, NY
                    </p>

                    <button>Open for projects</button>
                </div>

                <div className='wrapper'>
                    <h5>Company</h5>
                    <p>Home</p>
                    <p>About</p>
                    <p>Services</p>
                    <p>Contact</p>
                </div>
                <div className='wrapper'>
                    <h5>Services</h5>
                    <p>Paid Ads</p>
                    <p>Brand Strategy</p>
                    <p>Web Design</p>
                    <p>SEO optimazation</p>
                </div>
                <div className='wrapper'>
                    <div className='media-wrapper'>
                        <RiInstagramFill className='icon' />
                        Instagram
                    </div>
                    <div className='media-wrapper'>
                        <FaLinkedinIn className='icon' />
                        LinkedIn
                    </div>
                    <div className='media-wrapper'>
                        <FaYoutube className='icon' />
                        YouTube
                    </div>
                </div>
            </main>
        </footer>
    );
}

export default Footer;

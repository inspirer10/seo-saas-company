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
                    <p className='footer-link'>Home</p>
                    <p className='footer-link'>About</p>
                    <p className='footer-link'>Services</p>
                    <p className='footer-link'>Contact</p>
                </div>
                <div className='wrapper'>
                    <h5>Services</h5>
                    <p className='footer-link'>Paid Ads</p>
                    <p className='footer-link'>Brand Strategy</p>
                    <p className='footer-link'>Web Design</p>
                    <p className='footer-link'>SEO optimazation</p>
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

            <article>
                <p>©2025 SEO SaaS. All rights reserved.</p>
                <aside>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies Settings</p>
                </aside>
            </article>
        </footer>
    );
}

export default Footer;

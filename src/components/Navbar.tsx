'use client';
import React from 'react';
import { IoLogoWebComponent } from 'react-icons/io5';

function Navbar() {
    const handleSectionRouting = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        section: string
    ) => {
        e.preventDefault();

        //IF na stronie głównej, przewiń do sekcji
        document
            .getElementById(`${section}`)
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav>
            <div
                className='logo-wrapper'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <IoLogoWebComponent className='logo-icon' /> <span>SEO</span>
            </div>

            <div className='links-wrapper'>
                <a
                    href='#results'
                    onClick={(e) => handleSectionRouting(e, 'results')}
                >
                    Results
                </a>
                <a
                    href='#services'
                    onClick={(e) => handleSectionRouting(e, 'services')}
                >
                    Services
                </a>
                <a
                    href='#pricing'
                    onClick={(e) => handleSectionRouting(e, 'pricing')}
                >
                    Pricing
                </a>
                <a
                    href='#testimonials'
                    onClick={(e) => handleSectionRouting(e, 'testimonials')}
                >
                    Testimonials
                </a>
                <a href='#faq' onClick={(e) => handleSectionRouting(e, 'faq')}>
                    FAQ
                </a>
            </div>

            <button>Contact Us</button>
        </nav>
    );
}

export default Navbar;

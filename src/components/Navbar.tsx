'use client';
import React from 'react';
import { useState } from 'react';
import { IoLogoWebComponent } from 'react-icons/io5';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

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
        <nav
            aria-label='Primary navigation'
            className={menuOpen ? 'menu-open' : undefined}
            onKeyDown={(event) => {
                if (event.key === 'Escape' && menuOpen) {
                    setMenuOpen(false);
                    event.currentTarget
                        .querySelector<HTMLButtonElement>('.menu-toggle')
                        ?.focus();
                }
            }}
        >
            <a
                href='#top'
                className='logo-wrapper'
                aria-label='SEO home'
                onClick={(event) => {
                    event.preventDefault();
                    setMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            >
                <IoLogoWebComponent className='logo-icon' /> <span>SEO</span>
            </a>

            <div className='links-wrapper' id='primary-navigation-links'>
                <a
                    href='#results'
                    onClick={(e) => {
                        handleSectionRouting(e, 'results');
                        setMenuOpen(false);
                    }}
                >
                    Results
                </a>
                <a
                    href='#services'
                    onClick={(e) => {
                        handleSectionRouting(e, 'services');
                        setMenuOpen(false);
                    }}
                >
                    Services
                </a>
                <a
                    href='#pricing'
                    onClick={(e) => {
                        handleSectionRouting(e, 'pricing');
                        setMenuOpen(false);
                    }}
                >
                    Pricing
                </a>
                <a
                    href='#testimonials'
                    onClick={(e) => {
                        handleSectionRouting(e, 'testimonials');
                        setMenuOpen(false);
                    }}
                >
                    Testimonials
                </a>
                <a
                    href='#faq'
                    onClick={(e) => {
                        handleSectionRouting(e, 'faq');
                        setMenuOpen(false);
                    }}
                >
                    FAQ
                </a>
            </div>

            <button
                className='contact-button'
                type='button'
                onClick={() => {
                    setMenuOpen(false);
                    document
                        .getElementById('get-started')
                        ?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                Contact Us
            </button>

            <button
                className='menu-toggle'
                type='button'
                aria-label={
                    menuOpen ? 'Close navigation menu' : 'Open navigation menu'
                }
                aria-expanded={menuOpen}
                aria-controls='primary-navigation-links'
                onClick={() => setMenuOpen((isOpen) => !isOpen)}
            >
                <span aria-hidden='true' />
                <span aria-hidden='true' />
                <span aria-hidden='true' />
            </button>
        </nav>
    );
}

export default Navbar;

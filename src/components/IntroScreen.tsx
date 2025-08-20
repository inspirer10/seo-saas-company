'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { IoLogoWebComponent } from 'react-icons/io5';

export default function IntroScreen() {
    const [showIntro, setShowIntro] = useState(true);

    // Lock body scroll during intro screen
    // and set a timeout to hide the intro screen after a delay
    useEffect(() => {
        const body = document.body;
        //body.classList.add('body--intro-lock');

        const prefersReduced = window.matchMedia?.(
            '(prefers-reduced-motion: reduce)'
        ).matches;
        const timeout = prefersReduced ? 500 : 1500;

        const timer = setTimeout(() => setShowIntro(false), timeout);

        return () => {
            clearTimeout(timer);
            body.classList.remove('body--intro-lock');
        };
    }, []);

    return (
        <AnimatePresence mode='wait'>
            {showIntro && (
                <motion.div
                    className='introScreen'
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 0.96,
                        filter: 'blur(6px)',
                    }}
                    transition={{
                        duration: 0.375,
                        ease: 'easeOut',
                    }}
                >
                    <motion.div
                        className='introContent'
                        initial={{ opacity: 0, scale: 0.825 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.35,
                            ease: 'easeOut',
                            delay: 0.025,
                        }}
                    >
                        <motion.div
                            className='logo'
                            initial={{ y: 18, opacity: 0, filter: 'blur(4px)' }}
                            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                            transition={{
                                duration: 0.425,
                                ease: 'easeOut',
                                delay: 0.1,
                            }}
                        >
                            <span className='logoIcon'>
                                <IoLogoWebComponent />
                            </span>
                            <span className='logoText'>SEO SAAS COMPANY</span>
                        </motion.div>

                        <motion.div
                            className='tagline'
                            initial={{ y: 12, opacity: 0, filter: 'blur(4px)' }}
                            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                            transition={{
                                duration: 0.425,
                                ease: 'easeOut',
                                delay: 0.175,
                            }}
                        >
                            Winning strategies for online success
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

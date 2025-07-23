'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

//* Components
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Results from '@/components/Results';
import Services from '@/components/Services';
import GetStarted from '@/components/GetStarted';
import Pricing from '@/components/Pricing';

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <>
            <Navbar />
            <Header />
            <Results />
            <Services />
            <GetStarted />
            <Pricing />
            <h1>Footer</h1>
        </>
    );
}

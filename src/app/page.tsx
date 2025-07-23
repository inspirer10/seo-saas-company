'use client';

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Results from '@/components/Results';
import Services from '@/components/Services';

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
            <h1>test</h1>
        </>
    );
}

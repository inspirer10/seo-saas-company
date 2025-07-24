'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function LenisProvider() {
    const lenisRef = useRef<Lenis | null>(null);
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        lenisRef.current = new Lenis();
        function raf(time: number) {
            lenisRef.current?.raf(time);
            rafId.current = requestAnimationFrame(raf);
        }
        rafId.current = requestAnimationFrame(raf);

        return () => {
            lenisRef.current?.destroy();
            lenisRef.current = null;
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    return null; // Nie renderuje nic do DOM
}

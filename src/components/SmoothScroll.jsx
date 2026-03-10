import { useEffect, useRef, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SmoothScroll = () => {
    const location = useLocation();
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });
        lenisRef.current = lenis;

        function update(time) {
            lenis.raf(time * 1000);
        }

        gsap.ticker.add(update);

        // Disable lag smoothing in GSAP to prevent stuttering
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(update);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    useLayoutEffect(() => {
        // Immediate scroll attempt
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
        window.scrollTo(0, 0);

        // Backup attempt after a short delay to handle any render delays
        const timeoutId = setTimeout(() => {
            if (lenisRef.current) {
                lenisRef.current.scrollTo(0, { immediate: true });
            }
            window.scrollTo(0, 0);
        }, 50);

        return () => clearTimeout(timeoutId);
    }, [location.pathname]);

    return null;
};

export default SmoothScroll;

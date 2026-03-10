import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        // Move cursor and follower
        const onMouseMove = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0, // Instant
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.15, // Slight delay for smoothness
                ease: "power2.out"
            });
        };

        // Hover effects
        const onMouseEnterLink = () => {
            gsap.to(cursor, { scale: 0, duration: 0.1 }); // Hide dot
            gsap.to(follower, {
                scale: 3,
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(0, 0, 0, 0.5)",
                duration: 0.3
            });
        };

        const onMouseLeaveLink = () => {
            gsap.to(cursor, { scale: 1, duration: 0.1 });
            gsap.to(follower, {
                scale: 1,
                backgroundColor: "transparent",
                border: "1px solid #000",
                duration: 0.3
            });
        };

        document.addEventListener('mousemove', onMouseMove);

        // Add listeners to clickable elements
        const links = document.querySelectorAll('a, button, .gallery-card, .uu-cards');
        links.forEach(link => {
            link.addEventListener('mouseenter', onMouseEnterLink);
            link.addEventListener('mouseleave', onMouseLeaveLink);
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            links.forEach(link => {
                link.removeEventListener('mouseenter', onMouseEnterLink);
                link.removeEventListener('mouseleave', onMouseLeaveLink);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="custom-cursor-dot"></div>
            <div ref={followerRef} className="custom-cursor-follower"></div>
        </>
    );
};

export default CustomCursor;

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './AboutSection.css';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text }) => {
    return text.split(" ").map((word, index) => (
        <span
            key={index + word}
            className="word-span"
            style={{ display: "inline-block", marginRight: "0.25em" }}
        >
            {word}
        </span>
    ));
};

function AboutSection() {
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const [activeLab, setActiveLab] = useState(null);

    const labTests = [
        {
            name: "Retatrutide (R10) - 99.9% Purity",
            url: "https://verify.janoshik.com/tests/85459-R10_BlueYellow_A3NZX4PHDI6U",
            date: "Jan 2024"
        },
        {
            name: "Ipamorelin 10mg - 99.7% Purity",
            url: "https://verify.janoshik.com/tests/97798-ipamorelin_10_mg_AQHZBGEKX3YC",
            date: "Feb 2024"
        }
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%", // Start animation when top of container hits 80% viewport height
                toggleActions: "play none none reverse"
            }
        });

        // 1. Heading Reveal (Clip Path Curtain)
        tl.fromTo(headingRef.current,
            {
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                y: 50,
                opacity: 0
            },
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out"
            }
        );

        // 2. Paragraph Word Stagger (Blur + Slide Up)
        // Select all word spans inside the paragraph
        const words = paragraphRef.current.querySelectorAll(".word-span");

        tl.fromTo(words,
            {
                opacity: 0,
                y: 20,
                filter: "blur(8px)"
            },
            {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.8,
                stagger: 0.015, // Fast ripple effect
                ease: "power2.out"
            },
            "-=0.8" // Overlap with heading animation
        );

        // 3. Features Grid Animation
        const featureItems = gsap.utils.toArray(".QWE-stat-item");

        gsap.fromTo(featureItems,
            {
                y: 40,
                opacity: 0,
                filter: "blur(10px)"
            },
            {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".QWE-stats-grid",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );

    }, { scope: containerRef });

    return (
        <>
            <div className="QWE-container" ref={containerRef}>
                <div className="QWE-content-wrapper">
                    <div className="QWE-text-block">
                        <h1 className="QWE-heading" ref={headingRef}>Who We Are</h1>
                        <div className="QWE-paragraph" ref={paragraphRef} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', lineHeight: '1.6' }}>
                            <p style={{ margin: 0 }}>
                                <AnimatedText text="We’re a group of people who got tired of the peptide market being full of overpriced, low-quality, and sometimes risky products. Many buyers end up sourcing from places like IndiaMART, PurityTherapeutics, Apex Supplement, and similar platforms where prices are high but quality is uncertain." />
                            </p>
                            <p style={{ margin: 0 }}>
                                <AnimatedText text="So we built this platform." />
                            </p>
                            <p style={{ margin: 0 }}>
                                <AnimatedText text="Our approach is simple:" />
                                <strong className="word-span" style={{ display: "inline-block", marginRight: "0.25em", color: "#e4e4e7" }}>fair</strong>
                                <strong className="word-span" style={{ display: "inline-block", marginRight: "0.25em", color: "#e4e4e7" }}>pricing</strong>
                                <strong className="word-span" style={{ display: "inline-block", marginRight: "0.25em", color: "#e4e4e7" }}>and</strong>
                                <strong className="word-span" style={{ display: "inline-block", marginRight: "0.25em", color: "#e4e4e7" }}>reliable</strong>
                                <strong className="word-span" style={{ display: "inline-block", marginRight: "0.25em", color: "#e4e4e7" }}>quality.</strong>
                                <AnimatedText text="Every peptide is listed with only about a" />
                                <strong className="word-span" style={{ display: "inline-block", marginRight: "0.25em", color: "#e4e4e7" }}>5%</strong>
                                <strong className="word-span" style={{ display: "inline-block", marginRight: "0.25em", color: "#e4e4e7" }}>profit</strong>
                                <strong className="word-span" style={{ display: "inline-block", marginRight: "0.25em", color: "#e4e4e7" }}>margin</strong>
                                <AnimatedText text="after covering costs like shipping, storage, hosting, proxies, and operations. The goal isn’t maximizing profit — it’s making high-quality peptides accessible without extreme markups." />
                            </p>
                            <p style={{ margin: 0 }}>
                                <AnimatedText text="We are fully transparent about our origins. Initially, we double-ordered every batch from our Chinese vendors—the first half was sent for 3rd-party verification, while we used the second half ourselves to personally ensure efficacy. Only after confirming both the data and the results did we decide to make these sources available for you." />
                            </p>
                            <p style={{ margin: 0 }}>
                                <AnimatedText text="To learn more about our sourcing and quality process, visit the" />
                                <Link to="/about" className="word-span" style={{ display: "inline-block", marginRight: "0.25em", color: "#F04899", textDecoration: "underline", fontWeight: "bold" }}>Learn</Link>
                                <AnimatedText text="page." />
                            </p>
                        </div>
                    </div>
                    <div className="QWE-stats-block">
                        <div className="lab-verification-container">
                            <h3 className="lab-verification-title">Lab Verification</h3>
                            <p className="lab-verification-desc">
                                We don't just sell. We source, we check, and we use. Every batch is initially double-ordered from our Chinese vendors—the first half is sent for verification, and the second is tested by us personally before it ever reaches you.
                            </p>
                            <div className="lab-test-links">
                                {labTests.map((test, i) => (
                                    <button
                                        key={i}
                                        className="lab-test-btn"
                                        onClick={() => setActiveLab(test.url)}
                                    >
                                        <span className="lab-test-name">{test.name}</span>
                                        <span className="lab-test-tag">View Analysis</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lab Result Modal */}
                {activeLab && (
                    <div className="lab-modal-overlay" onClick={() => setActiveLab(null)}>
                        <div className="lab-modal-content" onClick={e => e.stopPropagation()}>
                            <div className="modal-header">
                                <h3>Verified Analysis</h3>
                                <button className="modal-close" onClick={() => setActiveLab(null)}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <iframe
                                    src={activeLab}
                                    title="Janoshik Lab Test"
                                    className="lab-iframe"
                                />
                            </div>
                            <div className="modal-footer">
                                <a href={activeLab} target="_blank" rel="noopener noreferrer" className="external-link-btn">
                                    Open on Janoshik.com
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}

export default AboutSection;
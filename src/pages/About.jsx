import React, { useEffect, useRef } from 'react';
import CustomCursor from '../components/CustomCursor';
import './Learn.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const sections = gsap.utils.toArray('.learn-section');
        sections.forEach((section) => {
            gsap.from(section, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            });
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="learn-page-container">
            <CustomCursor />

            <div className="learn-hero-section">
                <h1 className="learn-hero-title">Understanding Peptides</h1>
                <p className="learn-hero-subtitle">The future of research and cellular optimization.</p>
            </div>

            <div className="learn-content-section">

                <section className="learn-section">
                    <h2>What are Peptides?</h2>
                    <p>Peptides are short chains of amino acids that act as signaling molecules in the body. They "instruct" cells to perform specific tasks—like burning fat, repairing tissue, or releasing hormones.</p>
                </section>

                <section className="learn-section">
                    <h2>Safety & Reconstitution</h2>
                    <ul className="learn-list">
                        <li><strong>BAC Water:</strong> Always use Bacteriostatic water to prevent bacterial growth.</li>
                        <li><strong>Storage:</strong> Keep reconstituted peptides in the refrigerator (2-8°C).</li>
                        <li><strong>Handling:</strong> Peptides are fragile. Avoid shaking the vial once water is added; swirl gently to dissolve.</li>
                    </ul>
                </section>

                <section className="learn-section">
                    <h2>Our Research Compounds</h2>
                    <div className="compound-grid">

                        <div className="compound-card">
                            <h3>Retatrutide (Reta)</h3>
                            <p><strong>Purpose:</strong> Triple-hormone receptor agonist for rapid weight loss, appetite suppression, and blood sugar regulation.</p>
                            <p><strong>Pros:</strong> Unparalleled weight loss, improves insulin sensitivity, targets stubborn fat.</p>
                            <p><strong>Cons:</strong> Gastrointestinal side effects (nausea, diarrhea).</p>
                        </div>

                        <div className="compound-card">
                            <h3>GHK-Cu (Copper Peptide)</h3>
                            <p><strong>Purpose:</strong> Naturally occurring copper complex for skin rejuvenation, hair follicle stimulation, and accelerated wound healing.</p>
                            <p><strong>Pros:</strong> Stimulates collagen, powerful antioxidant, improves skin density.</p>
                            <p><strong>Cons:</strong> Can be painful at the injection site (high concentration).</p>
                        </div>

                        <div className="compound-card">
                            <h3>Ipamorelin</h3>
                            <p><strong>Purpose:</strong> Selective growth hormone secretagogue for anti-aging, muscle recovery, and body composition improvement.</p>
                            <p><strong>Pros:</strong> Lean muscle growth without hunger, no impact on cortisol/prolactin.</p>
                            <p><strong>Cons:</strong> Mild headaches immediately after injection, slight water retention.</p>
                        </div>

                        <div className="compound-card">
                            <h3>CJC-1295 (No DAC)</h3>
                            <p><strong>Purpose:</strong> GHRH analog for synergistic GH pulse stimulation, fat loss, and cellular repair.</p>
                            <p><strong>Pros:</strong> Increases IGF-1 levels, enhanced fat metabolism, excellent when stacked.</p>
                            <p><strong>Cons:</strong> Facial flushing shortly after administration due to GH release.</p>
                        </div>

                    </div>
                </section>

                <section className="learn-section">
                    <h2>Why Quality Matters</h2>
                    <p>At HEART, we prioritize purity and consistency. Each batch undergoes rigorous testing to ensure that the dosage on the label matches the reality in the vial. Research success depends on precision.</p>
                </section>

            </div>
        </div>
    );
};

export default About;

import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtextRef = useRef(null);
  const buttonRef = useRef(null);
  const arrowRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Initial fade in for the background/container
    tl.from(containerRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.out"
    });

    // 2. Title word by word reveal or simple fade up
    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out"
    }, "-=0.8");

    // 3. Subtext fade up
    tl.from(subtextRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6");

    // 4. Button appear
    tl.from(buttonRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");

    // 5. Arrow appear
    tl.from(arrowRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(2)"
    }, "-=0.2");

  }, { scope: containerRef });

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero-section-container" ref={containerRef}>
      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>
          Indian<br />Store
        </h1>

        <p className="hero-subtext" ref={subtextRef}>
          Here at <span className="highlight">Heart Peptides</span>, we provide high quality verified peptides directly sourced from Chinese labs to your doorsteps. Everything is transparent and right in front of you. Before buying anything, please go to this page to have every single doubt cleared.
        </p>

        <div className="hero-action" ref={buttonRef} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px', gap: '20px' }}>
          <Link to="/about" className="learn-more-btn" style={{
            padding: '16px 40px',
            backgroundColor: '#F04899',
            color: 'white',
            borderRadius: '50px',
            textDecoration: 'none',
            fontFamily: "'Inter', sans-serif",
            fontWeight: '500',
            fontSize: '1.2rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 14px 0 rgba(240, 72, 153, 0.39)'
          }}>
            Learn More
          </Link>
          <span style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9rem',
            maxWidth: '200px',
            textAlign: 'left',
            lineHeight: '1.4',
            fontStyle: 'italic',
            borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
            paddingLeft: '15px'
          }}>
            on the product page always read the personal thought
          </span>
        </div>
      </div>

      <div className="scroll-indicator" ref={arrowRef} onClick={scrollToContent}>
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
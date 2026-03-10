import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomCursor from "../components/CustomCursor";
import { Upload, ArrowRight } from "lucide-react";

function Contact() {
  const containerRef = useRef(null);
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".contact-hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2
    })
      .from(".contact-form-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      }, "-=0.5")
      .from(".contact-info-section", {
        opacity: 0,
        y: 20,
        duration: 0.8
      }, "-=0.5");

  }, { scope: containerRef });

  return (
    <div className="contact-page-wrapper" ref={containerRef}>
      <CustomCursor />

      {/* Background Map Effect */}
      <div className="map-background">
        <img
          src="/Gemini_Generated_Image_4b93fb4b93fb4b93.png"
          alt="Map Background"
          className="map-image"
        />
        {/* Location Pin Overlay */}
        <div className="map-pin-container" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="4" fill="#fff" className="map-pin" />
            <circle cx="20" cy="20" r="15" fill="none" stroke="#fff" strokeWidth="1" className="map-pin-pulse" />
          </svg>
        </div>
      </div>

      <div className="contact-content-container">
        <div className="contact-left-side">
          <div className="contact-hero-text">
            <h1 style={{ marginTop: '0' }}>Reach out securely</h1>
          </div>

          <div className="contact-story-container">
            <h2 style={{ fontSize: "2rem", marginBottom: "20px", fontFamily: "Instrument Sans, sans-serif" }}>Behind the Brand</h2>
            <p className="story-paragraph">
              Let's be fully transparent—this industry space isn't strictly conventional or fully regulated. To ensure the safety of our operations, our true identities remain hidden. We aren't a massive corporate entity. We are just a group of guys who originally had to source for ourselves.
            </p>
            <p className="story-paragraph">
              We got tired of seeing people being looted by outrageous markups purely due to a lack of awareness and source verification within the community. That's why we stepped in: fair pricing and verified quality.
            </p>
            <div className="story-highlight" style={{ marginBottom: 0 }}>
              <strong>Logistics & Location:</strong> Mostly we'll be sending packages from <strong>Delhi, Mumbai, and Uttarakhand</strong>. When you place an order, we will plan the nearest dispatch hub accordingly to get your vials to you as quickly as possible.
            </div>
          </div>
        </div>

        <div className="contact-right-side">
          <div className="contact-form-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '60px 40px' }}>
            <h3 style={{ marginBottom: '20px' }}>SINGLE POINT OF CONTACT</h3>

            <p className="story-paragraph" style={{ marginBottom: '30px', color: '#111' }}>
              We use Discord as our primary hub. Join our server to talk directly with us, place orders securely, and receive real-time updates regarding tracking and stock.
            </p>

            <a href="https://discord.gg/MAMWGg2rS" target="_blank" rel="noopener noreferrer" className="discord-btn" style={{ padding: '16px 32px', fontSize: '1.1rem', width: '100%', maxWidth: 'none', textAlign: 'center' }}>
              JOIN HEART DISCORD
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

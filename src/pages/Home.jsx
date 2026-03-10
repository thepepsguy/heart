// Home Page JSX

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutSection from "../components/AboutSection";
import SelectedArticles from "../components/SelectedArticles";
import HeroSection from "../components/HeroSection";
import ProductShowcase from "../components/ProductShowcase";
import CustomCursor from "../components/CustomCursor";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const containerRef = useRef(null);

    useEffect(() => {
        // Manual smooth scroll removed in favor of Lenis
    }, []);

    useGSAP(() => {
        // GSAP animations will go here
        console.log("GSAP is ready on Home page with smooth scrolling");
    }, { scope: containerRef });

    return (
        <div ref={containerRef}>
            <CustomCursor />
            <HeroSection />
            <AboutSection />
            <ProductShowcase />
            <SelectedArticles />
        </div>
    );
}
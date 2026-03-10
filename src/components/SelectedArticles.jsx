import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import "./SelectedArticles.css";

import article1Img from '../assets/article 1 reta.png';
import article2Img from '../assets/article 2 ghk.png';
import article3Img from '../assets/article 3 cjc.png';

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  {
    id: 1,
    type: "text",
    content: {
      label: "Clinical Research",
      heading: "The Science of Peptides",
      description: "Explore the peer-reviewed studies and clinical trials that form the foundation of our high-purity metabolic and regenerative peptide catalog."
    },
    size: "medium"
  },
  {
    id: 2,
    type: "image",
    image: article1Img,
    title: "Retatrutide Efficacy",
    category: "NEJM Study",
    link: "https://www.nejm.org/doi/full/10.1056/NEJMoa2301972?utm_source=chatgpt.com",
    size: "large",
    speed: 0.1
  },
  {
    id: 3,
    type: "image",
    image: article2Img,
    title: "GHK-Cu Regeneration",
    category: "R3 Health",
    link: "https://www.r3health.co/the-power-of-peptides-unlocking-the-secrets-of-anti-aging-regeneration-and-aesthetics/?utm_source=chatgpt.com",
    size: "medium",
    speed: 0.2
  },
  {
    id: 4,
    type: "text",
    content: {
      label: "Impact",
      stat: "150+",
      heading: "Global clinical studies",
      description: "Backed by rigorous scientific literature and comprehensive metabolic pathway analysis."
    },
    size: "small"
  },
  {
    id: 5,
    type: "image",
    image: article3Img,
    title: "CJC-1295 & Ipamorelin",
    category: "Innerbody",
    link: "https://www.innerbody.com/cjc-1295-and-ipamorelin?utm_source=chatgpt.com",
    size: "large",
    speed: 0.15
  }
];

export default function SelectedArticles() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray(".gallery-item");

    items.forEach((item) => {
      // 1. Image Reveal Animation
      if (item.classList.contains("type-image")) {
        const imgWrapper = item.querySelector(".gallery-img-wrapper");
        const img = item.querySelector(".gallery-img");

        gsap.fromTo(imgWrapper,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Parallax
        if (window.innerWidth > 1024) {
          const speed = item.dataset.speed || 0.1;
          gsap.to(img, {
            y: -30, // Reduced movement for shorter images
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          });
        }
      }

      // 2. Text Reveal Animation
      if (item.classList.contains("type-text")) {
        const lines = item.querySelectorAll(".anim-line");

        gsap.fromTo(lines,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

  }, { scope: containerRef });

  return (
    <section className="gallery-section" ref={containerRef}>
      <div className="gallery-header">
        <h2 className="gallery-title">Selected Articles</h2>
        <p className="gallery-subtitle">Curated research forming the foundation of modern peptides.</p>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item) => {
          if (item.type === "text") {
            return (
              <div key={item.id} className={`gallery-item type-text ${item.size}`}>
                <div className="text-content-wrapper">
                  {item.content.label && <span className="text-label anim-line">{item.content.label}</span>}
                  {item.content.stat && <span className="text-stat anim-line">{item.content.stat}</span>}
                  <h3 className="text-heading anim-line">{item.content.heading}</h3>
                  <p className="text-desc anim-line">{item.content.description}</p>
                </div>
              </div>
            );
          }

          return (
            <div
              key={item.id}
              className={`gallery-item type-image ${item.size}`}
              data-speed={item.speed}
              onClick={() => { if (item.link) window.open(item.link, "_blank"); }}
            >
              <div className="gallery-img-wrapper">
                <div
                  className="gallery-img"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="gallery-overlay">
                  <div className="gallery-content">
                    <span className="gallery-category">{item.category}</span>
                    <h3 className="gallery-item-title">{item.title}</h3>
                  </div>
                  <div className="gallery-action">
                    <ArrowUpRight size={24} color="#fff" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductShowcase.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { products } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

const ProductShowcase = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);

    // Show all products
    const displayProducts = products;

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    useGSAP(() => {
        const cards = gsap.utils.toArray('.product-card-item');

        cards.forEach((card, index) => {
            gsap.from(card, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }, { scope: containerRef });

    return (
        <section id="product-showcase" className="product-showcase-section" ref={containerRef}>
            {/* Design Element - Circle from the image */}
            <div className="design-element-circle">
                <div className="inner-dot"></div>
            </div>

            <div className="product-grid-showcase">
                {displayProducts.map((product) => (
                    <div
                        key={product.id}
                        className="product-card-item"
                        onClick={() => handleProductClick(product.id)}
                    >
                        <div className="product-image-container">
                            <img src={product.options ? product.options[0].image : product.image} alt={product.name} className="product-main-img" />
                        </div>
                        <div className="product-info-details">
                            <h3 className="product-name-title">{product.name}</h3>
                            <p className="product-short-desc">{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductShowcase;

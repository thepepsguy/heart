import React, { useRef, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDetail.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowLeft } from 'lucide-react';
import CustomCursor from '../components/CustomCursor';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const containerRef = useRef(null);
    const imgRef = useRef(null);
    const infoRef = useRef(null);

    const [selectedOptionId, setSelectedOptionId] = useState(null);

    useEffect(() => {
        if (product && product.options) {
            setSelectedOptionId(product.options[0].id);
        }
    }, [product]);

    // Derived State
    const currentOption = product?.options ? product.options.find(o => o.id === selectedOptionId) : null;
    const displayImage = currentOption ? currentOption.image : product?.image;
    const displayPrice = currentOption ? currentOption.price : product?.price;
    const displayDosage = currentOption ? currentOption.dosage : product?.dosage;
    const displayUsage = currentOption ? currentOption.usage : product?.usage;

    useGSAP(() => {
        if (!product) return;

        // 1. Hero Image "Open" Effect (Zoom In)
        gsap.fromTo(imgRef.current,
            {
                scale: 0.8,
                opacity: 0,
                filter: "blur(10px)"
            },
            {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                duration: 1.2,
                ease: "power3.out"
            }
        );

        // 2. Info Panel Slide In
        gsap.fromTo(infoRef.current,
            {
                x: 100,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3, // Start slightly after image
                ease: "power3.out"
            }
        );

        // Stagger text elements inside info panel
        const textElements = infoRef.current.querySelectorAll('.animate-text');
        gsap.fromTo(textElements,
            {
                y: 20,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                delay: 0.5,
                ease: "power2.out"
            }
        );

    }, { scope: containerRef, dependencies: [id] });

    if (!product) {
        return <div className="product-detail-container">Product not found</div>;
    }

    return (
        <div className="product-detail-container" ref={containerRef}>
            <CustomCursor />
            {/* Left: Image Section */}
            <div className="product-image-section">
                <img
                    ref={imgRef}
                    src={displayImage}
                    alt={product.name}
                    className="product-detail-img"
                />
            </div>

            {/* Right: Info Section */}
            <div className="product-info-section" ref={infoRef}>
                <Link to="/" onClick={() => setTimeout(() => document.getElementById('product-showcase')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="back-link animate-text">
                    <ArrowLeft size={20} style={{ marginRight: '8px' }} /> Back to Products
                </Link>

                <div className="product-detail-header">
                    <span className="product-detail-category animate-text">{product.category}</span>
                    <h1 className="product-detail-title animate-text">{product.name}</h1>
                    <span className="product-detail-price animate-text">₹{displayPrice}</span>
                </div>

                <p className="product-detail-desc animate-text">
                    {product.details}
                </p>

                {product.options && (
                    <div className="product-options-selector animate-text" style={{ marginBottom: '30px' }}>
                        <span className="spec-title" style={{ display: 'block', marginBottom: '10px', fontSize: '1rem', fontWeight: 600 }}>Select Quantity</span>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {product.options.map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => setSelectedOptionId(opt.id)}
                                    style={{
                                        padding: '10px 20px',
                                        borderRadius: '8px',
                                        border: selectedOptionId === opt.id ? '2px solid #1a1a1a' : '1px solid #ddd',
                                        backgroundColor: selectedOptionId === opt.id ? '#1a1a1a' : '#fff',
                                        color: selectedOptionId === opt.id ? '#fff' : '#333',
                                        cursor: 'pointer',
                                        fontFamily: 'Outfit, sans-serif',
                                        fontWeight: 600,
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {opt.dosage}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="specifications-box animate-text">
                    <span className="spec-title">Product Information</span>
                    <ul className="spec-list">
                        <li><strong>Dosage:</strong> {displayDosage}</li>
                        <li><strong>Formulation:</strong> Lyophilized Powder {product.withBac ? "(Includes BAC Water)" : ""}</li>
                        <li><strong>Usage Protocol:</strong> {displayUsage}</li>
                    </ul>

                    <div style={{ marginTop: '20px' }}>
                        <span className="spec-title">Pros</span>
                        <ul className="spec-list">
                            {product.pros && product.pros.map((pro, index) => <li key={index}>{pro}</li>)}
                        </ul>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <span className="spec-title">Cons / Considerations</span>
                        <ul className="spec-list">
                            {product.cons && product.cons.map((con, index) => <li key={index}>{con}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="product-actions animate-text">
                    <button className="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

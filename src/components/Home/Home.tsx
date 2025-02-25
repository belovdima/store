import React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1 className="hero-title">
                        Timeless Aesthetic. <br /> Modern Simplicity.
                    </h1>
                    <p className="hero-subtitle">
                        Minimalist essentials designed for those who seek
                        effortless style.
                    </p>
                    <Link to="/shop" className="btn hero-btn">
                        Shop Now
                    </Link>
                </div>
            </section>

            {/* Men & Women Banners */}
            <section className="category-banners container">
                <div className="category-banner men">
                    <h2 className="category-title">Men</h2>
                    <Link to="/shop/men" className="btn category-btn">
                        Shop Men
                    </Link>
                </div>
                <div className="category-banner women">
                    <h2 className="category-title">Women</h2>
                    <Link to="/shop/women" className="btn category-btn">
                        Shop Women
                    </Link>
                </div>
            </section>

            {/* About */}
            <section className="about-preview container">
                <h2 className="h2 text-center">About</h2>
                <p className="about-text">
                    We create <strong>timeless essentials</strong> that blend
                    contemporary edge with minimalistic purity. Inspired by
                    architecture, movement, and raw textures, we strip away the
                    excess to reveal the <strong>essence of design</strong>.
                </p>
                <Link to="/about" className="btn">
                    Learn More
                </Link>
            </section>

            {/* Contact */}
            <section className="contact-preview container">
                <h2 className="h2 text-center">Need Help?</h2>
                <p className="contact-text">
                    For inquiries, collaborations, or support, reach out to us.
                </p>
                <Link to="/contact" className="btn">
                    Contact Us
                </Link>
            </section>
        </div>
    );
};

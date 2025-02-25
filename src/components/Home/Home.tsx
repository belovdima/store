import React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <h1 className="hero-title">
                        Timeless Aesthetic.
                        <br /> Modern Simplicity.
                    </h1>
                    <p className="hero-subtitle">
                        Minimalist essentials for those who seek effortless
                        style.
                    </p>
                    <Link to="/shop" className="btn hero-btn">
                        Shop Now
                    </Link>
                </div>
            </section>

            {/* Men & Women Banners */}
            <section className="categories container">
                <Link
                    to="/shop/men"
                    className="category-banner"
                    style={{
                        backgroundImage:
                            "url('https://plus.unsplash.com/premium_photo-1677838847781-07bba550c639?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVuc3dlYXIlMjBtb2RlbCUyMGdyYXl8ZW58MHx8MHx8fDA%3D')",
                    }}>
                    <h2 className="category-title">Men</h2>
                </Link>

                <Link
                    to="/shop/women"
                    className="category-banner"
                    style={{
                        backgroundImage:
                            "url('https://plus.unsplash.com/premium_photo-1677838847808-686ac388d5f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuc3dlYXIlMjBtb2RlbCUyMGdyYXl8ZW58MHx8MHx8fDA%3D')",
                    }}>
                    <h2 className="category-title">Women</h2>
                </Link>
            </section>

            {/* About */}
            <section className="about container">
                <h2 className="h2 text-center">About</h2>
                <p className="about-text">
                    We create <strong>timeless essentials</strong> that blend
                    contemporary edge with minimalistic purity. Inspired by
                    architecture, movement, and raw textures, we strip away the
                    excess to reveal the
                    <strong> essence of design</strong>.
                </p>
                <Link to="/about" className="btn">
                    Learn More
                </Link>
            </section>
        </div>
    );
};

import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                {/* Логотип */}
                <div className="footer-brand">
                    <h2 className="footer-logo">STORE</h2>
                    <p>Timeless Aesthetic. Modern Simplicity.</p>
                </div>

                {/* Навигация */}
                <nav className="footer-nav">
                    <Link to="/shop">Shop</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                </nav>

                {/* Соцсети */}
                <div className="footer-socials">
                    <a href="#" aria-label="Instagram">
                        Instagram
                    </a>
                    <a href="#" aria-label="Twitter">
                        Twitter
                    </a>
                    <a href="#" aria-label="Facebook">
                        Facebook
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Minimalist Store. All rights reserved.</p>
            </div>
        </footer>
    );
};

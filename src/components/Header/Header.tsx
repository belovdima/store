import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="container navbar">
                {/* Логотип */}
                <Link to="/" className="logo">
                    STORE
                </Link>

                {/* Меню */}
                <nav className={`nav-links ${isOpen ? "open" : ""}`}>
                    <Link to="/" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link to="/shop" onClick={() => setIsOpen(false)}>
                        Shop
                    </Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                </nav>

                {/* Кнопка-бургер для мобилок */}
                <button className="burger" onClick={() => setIsOpen(!isOpen)}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
            </div>
        </header>
    );
};

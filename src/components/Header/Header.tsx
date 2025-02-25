import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

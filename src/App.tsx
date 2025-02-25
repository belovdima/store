import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Shop } from "./components/Shop/Shop";
import { PrivacyPolicy } from "./components/PrivacyPolicy/PrivacyPolicy";
import { ScrollToTop } from "./ScrollToTop";
import { Cart } from "./components/Cart/Cart";
import { CartBadge } from "./components/CartBadge/CartBadge";

export const App: React.FC = () => {
    return (
        <Router basename="/store">
            <ScrollToTop />
            <Header />
            <CartBadge />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </Router>
    );
};

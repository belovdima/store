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
import { ProductPage } from "./components/ProductPage/ProductPage";

export const App: React.FC = () => {
    return (
        <Router basename="/">
            <ScrollToTop />
            <Header />
            <CartBadge />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </Router>
    );
};

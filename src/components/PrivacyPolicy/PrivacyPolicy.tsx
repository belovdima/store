import React from "react";

export const PrivacyPolicy: React.FC = () => {
    return (
        <div className="privacy-policy container">
            <h1 className="privacy-title">Privacy Policy</h1>

            <p className="privacy-intro">
                At <strong>Minimalist Store</strong>, we value your privacy and
                are committed to protecting your personal information. This
                Privacy Policy explains how we collect, use, and safeguard your
                data.
            </p>

            <section className="privacy-section">
                <h2>1. Information We Collect</h2>
                <p>
                    We may collect personal data such as your name, email
                    address, shipping details, and payment information when you
                    place an order, subscribe to our newsletter, or contact
                    support.
                </p>
            </section>

            <section className="privacy-section">
                <h2>2. How We Use Your Information</h2>
                <ul>
                    <li>To process and fulfill your orders</li>
                    <li>
                        To send updates, promotions, and newsletters (if
                        subscribed)
                    </li>
                    <li>To improve our services and website</li>
                    <li>To ensure secure transactions and prevent fraud</li>
                </ul>
            </section>

            <section className="privacy-section">
                <h2>3. Data Protection & Security</h2>
                <p>
                    We implement strict security measures to protect your
                    personal data. Payments are processed securely, and your
                    information is never shared with third parties without
                    consent.
                </p>
            </section>

            <section className="privacy-section">
                <h2>4. Your Rights</h2>
                <p>
                    You have the right to access, update, or delete your
                    personal information at any time. If you have any concerns,
                    please <a href="/contact">contact us</a>.
                </p>
            </section>

            <section className="privacy-section">
                <h2>5. Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. Any
                    changes will be posted here, so we encourage you to review
                    this page periodically.
                </p>
            </section>

            <p className="privacy-footer">
                If you have any questions about our Privacy Policy, feel free to{" "}
                <a href="/contact">get in touch</a>.
            </p>
        </div>
    );
};

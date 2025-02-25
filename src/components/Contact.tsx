export const Contact: React.FC = () => {
    return (
        <section className="contact-section container">
            <h2 className="h2 text-center">Contact</h2>
            <div className="contact-content">
                <div className="contact-block">
                    <h3>Customer Care & General Inquiries</h3>
                    <p>
                        For assistance, orders, or product-related questions,
                        contact us at:
                    </p>
                    <a href="mailto:support@yourbrand.com">
                        support@yourbrand.com
                    </a>
                </div>

                <div className="contact-block">
                    <h3>Press & Collaborations</h3>
                    <p>
                        For media inquiries or collaboration proposals, email us
                        at:
                    </p>
                    <a href="mailto:press@yourbrand.com">press@yourbrand.com</a>
                </div>

                <div className="contact-block">
                    <h3>Business Hours</h3>
                    <p>Monday – Friday: 10 AM – 6 PM (UTC)</p>
                    <p>Saturday – Sunday: Closed</p>
                </div>

                <div className="contact-block">
                    <h3>Response Time</h3>
                    <p>
                        We aim to reply within <strong>24-48 hours</strong>.
                    </p>
                </div>
            </div>
        </section>
    );
};

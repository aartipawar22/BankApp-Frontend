import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <header className="landing-header">
                <h1>Welcome to MyBank</h1>
                <p>Your trusted partner for financial growth and security.</p>
                <button className="cta-button">Get Started</button>
            </header>

            <section className="features-section">
                <h2>Our Services</h2>
                <div className="features">
                    <div className="feature-card">
                        <h3>Savings Account</h3>
                        <p>Secure and reliable savings accounts with competitive interest rates.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Loans</h3>
                        <p>Flexible loans to meet your personal and business needs.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Credit Cards</h3>
                        <p>Rewarding credit cards with exclusive offers and benefits.</p>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <h2>Why Choose Us?</h2>
                <p>
                    At MyBank, we prioritize customer satisfaction with personalized financial solutions, 
                    cutting-edge technology, and 24/7 customer support.
                </p>
            </section>

            <footer className="landing-footer">
                <p>© 2024 MyBank. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;

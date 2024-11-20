import React from 'react';
import './ContactUs.css';
import phoneIcon from './Assets/phone.png'; 
import emailIcon from './Assets/mail.png'; 
import locationIcon from './Assets/location.png'; 

const ContactUs = () => {
    return (
        <div className="contact-us">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We’d love to hear from you! Reach out to us with your queries or feedback.</p>
            </div>
            <div className="contact-container">
                <div className="contact-card">
                    <img src={phoneIcon} alt="Phone Icon" />
                    <h2>Phone</h2>
                    <p>+1 (800) 123-4567</p>
                    <p>+1 (800) 765-4321</p>
                </div>
                <div className="contact-card">
                    <img src={emailIcon} alt="Email Icon" />
                    <h2>Email</h2>
                    <p>support@bank.com</p>
                    <p>feedback@bank.com</p>
                </div>
                <div className="contact-card">
                    <img src={locationIcon} alt="Location Icon" />
                    <h2>Visit Us</h2>
                    <p>123 Bank Avenue,</p>
                    <p>Financial District,</p>
                    <p>New York, NY 10001</p>
                </div>
            </div>
            <div className="contact-form">
                <h2>Send Us a Message</h2>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;

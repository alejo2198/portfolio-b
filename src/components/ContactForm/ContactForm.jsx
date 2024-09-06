import React from 'react';
import './ContactForm.scss'

const ContactForm = () => {
    return (
    <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <div className="contact__wrapper">
            <div className="contact__text">
                <p>If you think I could be an asset to your web development team, please send me a message. </p>
                <p>I want to join a strong team where, under great mentorship, I could contribute to big projects.</p>
                <p>I hope to grow exponentially in this field as a part of your company.</p>
            </div>
            <form className="form">
                <div className="control__group">
                    <label className="label" htmlFor="full_name">Name</label>
                    <input type="text" name="full_name" id="full_name" placeholder="John Doe"/>
                </div>
                <div className="control__group">
                    <label className="label" htmlFor="company">Company</label>
                    <input type="text" name="company" id="company" placeholder="Amazon"/>
                </div>
                <div className="control__group">
                    <label className="label" htmlFor="message">Message</label>
                    <textarea name="message" id="message"></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
        
    </section>
    );
};

export default ContactForm;
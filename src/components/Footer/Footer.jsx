import './Footer.scss';

import email from "../../assets/icons/contact/email.svg";
import github from "../../assets/icons/contact/github.svg";
import linkedIn from "../../assets/icons/contact/linkedin.svg";
import phone from "../../assets/icons/contact/phone.svg";
import resume from "../../assets/icons/contact/resume.svg";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer__design">
            &nbsp;
            <div className="footer__design_invert">&nbsp;</div>
            <div className="footer__design_invert-section">&nbsp;</div>
        </div>
        <div className="footer__wrapper">
            <div className="footer__content">
                <h5 className='footer__header'>Thank you for Visiting</h5>
                <p className='footer__text'>I appreciate the time you took out of your day to check out my portfolio. Have a nice day.</p>
            </div>
            <ul className="contact__icons footer__icons">
                <li>
                    <a href="https://www.linkedin.com/in/alejandro-castro-professional/" target="_blank" rel="noopener noreferrer" className="contact_link footer__contact__link">
                        <div className="icon-container footer__icon-container">
                            <img src={linkedIn}  className="contact__icon footer__contact_icon" alt="linkedin logo"/>
                        </div>
                        
                    </a>
                </li>
                <li>
                    <a href="https://github.com/alejo2198" target="_blank" rel="noopener noreferrer" className="contact_link footer__contact__link">
                        <div className="icon-container footer__icon-container">
                            <img src={github} className="contact__icon footer__contact_icon"  alt="github logo"/>
                        </div>
                        
                    </a>
                </li>
                <li>
                    <a href="https://docs.google.com/document/d/1k4IQN1LOXPvVGYoyf9VfNVUcsgeGms5naMfbv3h5wEA/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="contact_link footer__contact__link">
                        <div className="icon-container footer__icon-container">
                            <img src={resume} className="contact__icon resume footer__contact_icon"  alt="resume icon"/>
                        </div>
                        
                    </a>
                </li>
                <li>
                    <a href="tel:6475455417" target="_blank" rel="noopener noreferrer" className="contact_link footer__contact__link">
                        <div className="icon-container footer__icon-container">
                            <img src={phone}  className="contact__icon footer__contact_icon" alt="phone icon"/>
                        </div>
                        
                    </a>
                </li>
                <li>
                    <a href="mailto:alejo199821@gmail.com" target="_blank" rel="noopener noreferrer" className="contact_link footer__contact__link">
                        <div className="icon-container footer__icon-container">
                            <img src={email}  className="contact__icon footer__contact_icon" alt="email icon"/>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        
    </footer>
    );
};

export default Footer;
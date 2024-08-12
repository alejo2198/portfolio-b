
import { useState } from 'react';
import closeIcon from '../../assets/icons/close.svg'
import './Nav.scss'


const Nav = () => {

    const [isNavClosed,setIsNavClosed] = useState(true);

    const toggleNav = (event) => {
        event.preventDefault();
        setIsNavClosed (prevState => !prevState);
    }

    return (
        <>
        <label className={`hamburger_menu ${isNavClosed ? '' : 'hide'}`} id="hamburger_menu" onClick={toggleNav}>
            <input type="checkbox" />
        </label>
        <nav className = {`nav ${isNavClosed ? 'hide' : ''}`}>
            <div className="nav__bar">
                <div className="logo">
                    <a href="" className="logo__text">&lt;AC/&gt;</a>
                </div>
                <a href="#" onClick={toggleNav} >
                    <img src={closeIcon} alt="an x symbol"/>
                </a>
            </div>
          
            <ul className="nav__links">
                <li><a href="#about" className="nav__link">Home</a></li>
                <li><a href="#skills" className="nav__link">Skills</a></li>
                <li><a href="#projects" className="nav_link">Projects</a></li>
                <li><a href="#contact" className="nav__link">Contact</a></li>
            </ul>
            <div className="nav__design">
                &nbsp;
            </div>
        </nav>
        </>
    );
};

export default Nav;


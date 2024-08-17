
import { useState,useEffect } from 'react';
import closeIcon from '../../assets/icons/close.svg'
import './Nav.scss'


const Nav = () => {

    function getWindowWidth() {
        const { innerWidth: width} = window;
        return width;
    }
    const [isNavClosed,setIsNavClosed] = useState(true);
    const [isMobile,setIsMobile] = useState(getWindowWidth() < 767);
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());

    const toggleNav = (event) => {
        event.preventDefault();
        setIsNavClosed (prevState => !prevState);
    }
    useEffect(() => {
        function handleResize() {
          setWindowWidth(getWindowWidth());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(()=>{
        if(windowWidth < 767){
            setIsMobile(true);
        } else{
            setIsMobile(false)
        }
        console.log(isMobile)
    },[windowWidth]);

    return (
        <>
        <label className={`hamburger_menu ${isNavClosed ? '' : 'hide'}`} id="hamburger_menu" onClick={toggleNav}>
            <input type="checkbox" />
        </label>
        <nav className = {`nav ${isNavClosed && isMobile ? 'hide' : ''}`}>
            <div className="nav__bar">
                <div className="logo">
                    <a href="" className="logo__text">&lt;AC/&gt;</a>
                </div>
            <ul className="nav__links">
                <li><a href="#about" className="nav__link">Home</a></li>
                <li><a href="#skills" className="nav__link">Skills</a></li>
                <li><a href="#projects" className="nav_link">Projects</a></li>
                <li><a href="#contact" className="nav__link">Contact</a></li>
            </ul>
                <a className={`${isMobile ? '' : 'hide'}`} href="#" onClick={toggleNav} >
                    <img src={closeIcon} alt="an x symbol"/>
                </a>
            </div>
          
            <div className={`nav__design ${isMobile ? '' : 'hide'}`}>
                &nbsp;
            </div>
        </nav>
        </>
    );
};

export default Nav;

    
    
    
    
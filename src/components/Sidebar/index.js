import './index.scss'
import LogoS from '../../assets/images/logo-official.png'
import LogoSubtitle from '../../assets/images/morrowLogos/subtitle/logo-transparent-png.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faInstagram,
    faLinkedin
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faHome,
    faUser,
    faEnvelope,
    faFolder,
    faBars,
    faClose
  } from '@fortawesome/free-solid-svg-icons'
  import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
  

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo" />
            <img src={LogoSubtitle} className="sub-logo" alt="morrow" />
        </Link>

        <nav className={showNav ? 'mobile': ''}>
            <NavLink onClick={() => setShowNav(false)} end activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} end activeclassname="active" to="/about" className="about-link">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} end activeclassname="active" to="/contact" className="contact-link">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} end activeclassname="active" to="/portfolio" className="portfolio-link">
                <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
            </NavLink>
            <FontAwesomeIcon icon={faClose} color='#ffd700' size='3x' className='close-mobile-icon' onClick={() => setShowNav(false)}/>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/alex-morrow-62a1532a4/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/alexmorrow239/'>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/AlexMorrow239'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color='#ffd700' size='3x' className='burger-icon'/>
    </div>
    )

    
}

export default Sidebar
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope , faMap , faCalendar} from "@fortawesome/free-solid-svg-icons";
import { faFacebook , faTwitter , faLinkedin , faInstagram} from "@fortawesome/free-brands-svg-icons";
import { Link , useLocation} from "react-router-dom";
function Header() {

    const location = useLocation(); 

    const isActive = (path) => location.pathname === path;
    return (
        <>
            <div className="sub-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <ul className="info">
                                <li><i><FontAwesomeIcon icon={faEnvelope} /></i> info@company.com</li>
                                <li><i><FontAwesomeIcon icon={faMap} /></i> Sunny Isles Beach, FL 33160</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <ul className="social-links">
                                <li><a href="#"><i><FontAwesomeIcon icon={faFacebook} /></i></a></li>
                                <li><a href="https://x.com/minthu" target="_blank"><i><FontAwesomeIcon icon={faTwitter} /></i></a></li>
                                <li><a href="#"><i><FontAwesomeIcon icon={faLinkedin} /></i></a></li>
                                <li><a href="#"><i><FontAwesomeIcon icon={faInstagram} /></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <Link className="logo" to="/">
                                    <h1>Villa</h1>
                                </Link>
                                <ul className="nav">
                                    <li>
                                        <Link className={isActive("/react_websites/urban-acres/") ? "active" : ""} to="/react_websites/urban-acres/">Home</Link>
                                    </li>
                                    <li>
                                        <Link className={isActive("/react_websites/urban-acres/properties") ? "active" : ""} to="/react_websites/urban-acres/properties">Properties</Link>
                                    </li>
                                    <li>
                                        <Link className={isActive("/react_websites/urban-acres/contact") ? "active" : ""} to="/react_websites/urban-acres/contact">Contact Us</Link>
                                    </li>
                                    <li><Link to="/react_websites/urban-acres/contact"><i><FontAwesomeIcon icon={faCalendar} /></i> Schedule a visit</Link></li>
                                </ul>
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}

export default Header;

import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './styles/Header.css';

const Header = () => {
    const navigate = useNavigate();  

    const handleHomeClick = () => {
        navigate('/');  
    };

    return (
        <div className="header">
            
            <div className="header-title">
                <button onClick={handleHomeClick} className="home-button">
                    UniFy
                </button>
            </div>
            <ul className="nav-links">
                <li><a href="/about-us" className="button">About Us</a></li>
                <li><a href="/contact-us" className="button">Contact Us</a></li>
                <li>
                    <div className="button-container">
                        <a href="/login" className="button">Login</a>
                        <a href="/signup" className="button">Signup</a>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Header;

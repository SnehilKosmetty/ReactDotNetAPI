
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export function NavMenu() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <header>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-brand">
                        ReactDotNetApp
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNavbar}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon">☰</span>
                    </button>
                    <div className={`navbar-collapse ${isExpanded ? 'show' : ''}`}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" onClick={() => setIsExpanded(false)}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/fetch-data" className="nav-link" onClick={() => setIsExpanded(false)}>
                                    Fetch Data
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link" onClick={() => setIsExpanded(false)}>
                                    Products
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
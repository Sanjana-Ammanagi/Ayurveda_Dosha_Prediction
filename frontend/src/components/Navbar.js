import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Logo and Links Section */}
            <div className="logo-and-links">
                <div className="navbar-logo">Ayurveda</div>
                <ul className="navbar-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/learn">Learn</Link>
                    </li>
                </ul>
            </div>

            {/* Login Link Section */}
            <div className="login-link">
                <a href="#login">Login</a>
            </div>
        </nav>
    );
};

export default Navbar;

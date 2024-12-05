import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Logo and Links Section */}
            <div className="logo-and-links">
                {/* Logo Image */}
                <img src="\flower.png" alt="Logo" className="navbar-logo-image" />
                <div className="navbar-logo-text">DoshaBloom</div>
                <ul className="navbar-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutus">About Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
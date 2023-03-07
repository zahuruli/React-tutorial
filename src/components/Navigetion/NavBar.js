import React from 'react';
import './Nav.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav>
                <NavLink to="/" className="nav-Link">
                    Home
                </NavLink>
                <NavLink to="/contact" className="nav-Link">
                    Contact
                </NavLink>
                <NavLink to="/blogs" className="nav-Link">
                    Blogs
                </NavLink>
            </nav>
        </div>
    );
};

export default NavBar;

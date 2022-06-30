import React from "react";
import {NavLink} from "react-router-dom";

import './header.css';


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <NavLink to='/' className="menu-item">Main</NavLink>
                    <NavLink to='/work' className="menu-item">Work</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;
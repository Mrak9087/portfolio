import React from "react";

import { faHome, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './menu.css'
import { NavLink } from "react-router-dom";
const Menu = () => {
    return (
        <nav className="navVert">
            <div className="menuItem"><FontAwesomeIcon icon={faHome} size="2x" className="menuIcon"/> <NavLink to='/' className="menuLink">Home</NavLink></div>
            <div className="menuItem"><FontAwesomeIcon icon={faBriefcase} size="2x" className="menuIcon"/> <NavLink to='/work' className="menuLink">Portfolio</NavLink></div>
        </nav>
    )
}

export default Menu;
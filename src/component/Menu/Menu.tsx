import React from "react";

import { faHome, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './menu.css'
import { NavLink } from "react-router-dom";
const Menu = () => {
    return (
        <nav className="navVert">
            <div className="menuItem">
                <NavLink to='/' className="menuLink"> 
                    <FontAwesomeIcon icon={faHome} size="1x" className="menuIcon"/>
                    Home
                </NavLink>
            </div>
            <div className="menuItem">
                <NavLink to='/work' className="menuLink">
                    <FontAwesomeIcon icon={faBriefcase} size="1x" className="menuIcon"/> 
                    Portfolio
                </NavLink>
            </div>
        </nav>
    )
}

export default Menu;
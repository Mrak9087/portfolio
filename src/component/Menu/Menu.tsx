import React from "react";

import { faHome, faBriefcase, faContactCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './menu.css'
import { NavLink } from "react-router-dom";
const Menu = () => {
    return (
        <nav className="navVert">
            <div className="menuItem">
                <NavLink to='/' className="menuLink"> 
                    <FontAwesomeIcon icon={faHome} size="1x" className="menuIcon"/>
                    <span>Home</span>
                </NavLink>
            </div>
            <div className="menuItem">
                <NavLink to='/portfolio' className="menuLink">
                    <FontAwesomeIcon icon={faBriefcase} size="1x" className="menuIcon"/> 
                    <span>Portfolio</span>
                </NavLink>
            </div>
            <div className="menuItem">
                <NavLink to='/contacts' className="menuLink">
                    <FontAwesomeIcon icon={faContactCard} size="1x" className="menuIcon"/> 
                    <span>Contacts</span>
                </NavLink>
            </div>
        </nav>
    )
}

export default Menu;
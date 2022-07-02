import React from "react";
import {NavLink} from "react-router-dom";

import './logo.css';

const Logo = () => {
    return (
        <div className="logo">
            <NavLink to="/" className="logoLink">
                <span>M</span>axim
            </NavLink>
        </div>
    )
}

export default Logo;
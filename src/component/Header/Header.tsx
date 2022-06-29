import React from "react";
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <NavLink to='/'>Main</NavLink>
                    <NavLink to='/work'>Work</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;
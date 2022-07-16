import React, { useState } from "react";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './switcherTheme.css';

const SwitcherTheme = () => {
    const [isMoon, setIsMoon] = useState(true);
    
    const checkTheme = () => {
        setIsMoon(!isMoon);
        document.body.classList.toggle('light');
    }

    return (
        <div className="switcherTheme" onClick={()=> {
            checkTheme();
        }}>
            {!isMoon 
                ?<FontAwesomeIcon icon={faMoon} size="2x"/>
                :<FontAwesomeIcon icon={faSun} size="2x"/> 
            }
            
        </div>
    )
}

export default SwitcherTheme;
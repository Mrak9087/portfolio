import React from "react";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './contact.css';

interface IContact {
        contactIcon: IconProp,
        contactTitle: string,
        linkTitle: string,
        contactLink: string,
}

const Contact = ({contactIcon, contactLink, contactTitle, linkTitle}: IContact) => {

    return (
        <div className="contactsItem">
            <a href={contactLink} target="_blank" className="contactLink">
                <FontAwesomeIcon icon={contactIcon} size='4x'/>
                <h2 className="contactTitle">{contactTitle}</h2>
                <span  className="contactName">{linkTitle}</span>
            </a>
        </div>
    )
}

export default Contact;
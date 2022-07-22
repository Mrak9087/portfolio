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
            <div className="itemContent">
                <FontAwesomeIcon icon={contactIcon} size='4x'/>
                <h2 className="contactTitle">{contactTitle}</h2>
                <a href={contactLink} target="_blank" className="contactLink">{linkTitle}</a>
            </div>
        </div>
    )
}

export default Contact;
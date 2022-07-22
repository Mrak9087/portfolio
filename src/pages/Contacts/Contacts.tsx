import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SectionTitle from "../../component/SectionTitle";

import './contacts.css';
import { faAt, faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import Contact from "../../component/Contact";

const CONTACTS = [
    {
        contactIcon:faAt,
        contactTitle:'Email',
        linkTitle:'maks19-88@mail.ru',
        contactLink:'mailto:maks19-88@mail.ru',
    },
    {
        contactIcon:faTelegram,
        contactTitle:'Telegram',
        linkTitle:'@dikar20',
        contactLink:'https://t.me/dikar20',
    },
    {
        contactIcon:faGithub,
        contactTitle:'GitHub',
        linkTitle:'mrak9087',
        contactLink:'https://github.com/mrak9087',
    },
    {
        contactIcon:faCode,
        contactTitle:'CodeWars',
        linkTitle:'mrak9087',
        contactLink:'https://www.codewars.com/users/mrak9087',
    }

]

const Contacts = () => {
    return (
        <div className="contacts">
            <SectionTitle text="Contacts" />
            <div className="contactsContent">
                {
                    CONTACTS.map(({contactIcon,contactLink,contactTitle,linkTitle},index)=> {
                        return <Contact 
                                    key={index}
                                    contactIcon={contactIcon}
                                    contactLink={contactLink}
                                    contactTitle={contactTitle}
                                    linkTitle={linkTitle}
                                />
                    })
                }
                {/* <div className="contactsItem">
                    <div className="itemContent">
                        <FontAwesomeIcon icon={faAt} size='4x'/>
                        <h2 className="contactTitle">Email</h2>
                        <a href="mailto:maks19-88@mail.ru" className="contactLink">maks19-88@mail.ru</a>
                    </div>
                </div>
                <div className="contactsItem">
                    <div className="itemContent">
                        <FontAwesomeIcon icon={faTelegram} size='4x'/>
                        <h2 className="contactTitle">Telegram</h2>
                        <a href="https://t.me/dikar20" className="contactLink">@dikar20</a>
                    </div>
                </div>
                <div className="contactsItem">
                    <div className="itemContent">
                        <FontAwesomeIcon icon={faGithub} size='4x'/>
                        <h2 className="contactTitle">GitHub</h2>
                        <a href="https://github.com/mrak9087" className="contactLink">mrak9087</a>
                    </div>
                </div>
                <div className="contactsItem">
                    <div className="itemContent">
                        <FontAwesomeIcon icon={faCode} size='4x'/>
                        <h2 className="contactTitle">CodeWars</h2>
                        <a href="https://www.codewars.com/users/mrak9087" className="contactLink">mrak9087</a>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Contacts;
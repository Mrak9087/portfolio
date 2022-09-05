import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SectionTitle from '../../component/SectionTitle';

import './contacts.css';
import { faAt, faCode, faLocation, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import Contact from '../../component/Contact';

const CONTACTS = [
  {
    contactIcon: faAt,
    contactTitle: 'Email',
    linkTitle: 'maks19-88@mail.ru',
    contactLink: 'mailto:maks19-88@mail.ru',
  },
  {
    contactIcon: faTelegram,
    contactTitle: 'Telegram',
    linkTitle: '@dikar20',
    contactLink: 'https://t.me/dikar20',
  },
  {
    contactIcon: faGithub,
    contactTitle: 'GitHub',
    linkTitle: 'mrak9087',
    contactLink: 'https://github.com/mrak9087',
  },
  {
    contactIcon: faCode,
    contactTitle: 'CodeWars',
    linkTitle: 'mrak9087',
    contactLink: 'https://www.codewars.com/users/mrak9087',
  },
  {
    contactIcon: faMapLocation,
    contactTitle: 'Address',
    linkTitle: `Saratov region village Turki`,
    contactLink:
      'https://yandex.ru/maps/geo/rabochiy_posyolok_turki/53096791/?ll=43.271816%2C51.984392&z=14.33',
  },
];

const Contacts = () => {
  return (
    <div className="contacts">
      <SectionTitle text="Contacts" />
      <div className="contactsContent">
        {CONTACTS.map(({ contactIcon, contactLink, contactTitle, linkTitle }, index) => {
          return (
            <Contact
              key={index}
              contactIcon={contactIcon}
              contactLink={contactLink}
              contactTitle={contactTitle}
              linkTitle={linkTitle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;

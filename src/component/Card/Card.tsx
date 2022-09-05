import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IWork } from '../../model/interfaces';

import './card.css';

type TCard = Omit<IWork, 'deploy' | 'stack' | 'repo' | 'id'>;

const Card = ({ description, images, name, title }: TCard) => {
  const { pathname } = useLocation();
  return (
    <>
      <Link to={`${pathname}/${name}`} className="card">
        <div className="cardContent">
          <div className="cardImg">
            <img src={`./images/${images[0]}`} alt={title} />
          </div>
          <div className="cardInfo">
            <h2 className="cardTitle">{title}</h2>
            <p className="cardDesc">{description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;

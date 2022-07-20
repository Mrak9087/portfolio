import React from "react";
import { ICard } from "../../model/interfaces";

import './card.css';

const Card = ({deploy,description,images,repo,stack,title}: ICard) => {
    return (
        <>
            <a href="#" className="card">
                <div className="cardContent">
                    <div className="cardImg">
                        <img src={`./images/${images[0]}`} alt={title} />
                    </div>
                    <div className="cardInfo">
                        <h2 className="cardTitle">{title}</h2>
                        <p className="cardDesc">
                            {description}
                        </p>
                    </div>
                </div>
            </a>
        </>
    )
}

export default Card;
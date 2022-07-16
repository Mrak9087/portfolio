import React from "react";

import './card.css';

const Card = () => {
    return (
        <>
            <a href="#" className="card">
                <div className="cardImg">
                    <img src="./images/trello.png" alt="trello" />
                </div>
                <div className="cardInfo">
                    <h2 className="cardTitle">Trello Clone</h2>
                    <p className="cardDesc">
                    Система управления проектами – приложение помогающее достичь поставленные задачи 
                    отдельному человеку в команде или группе разработчиков.
                    </p>
                </div>
            </a>
        </>
    )
}

export default Card;
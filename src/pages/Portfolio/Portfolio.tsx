import React, { useEffect, useState } from "react";

import axios from "axios";

import './portfolio.css'

import Card from "../../component/Card";
import SectionTitle from "../../component/SectionTitle";
import { IWork, IAxiosCard } from "../../model/interfaces";



const Portfolio = () => {
  const [cards, setCards] = useState<IWork[]>([]);

  const getCards = async () => {
    const response = await axios.get<IAxiosCard>("./works.json");
    const data: IWork[] = response.data.works;
    setCards(data);
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="portfolio">
      <SectionTitle text="Portfolio" />
      <div className="portfolioContent">
        {cards.map(
          ({ id, deploy, description, images, repo, stack, title, name }) => {
            return (
              <Card
                key={id}
                description={description}
                images={images}
                title={title} 
                name={name}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default Portfolio;
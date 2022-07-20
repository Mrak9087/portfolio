import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../component/Card";
import SectionTitle from "../../component/SectionTitle";
import { ICard } from "../../model/interfaces";
import "./work.css";

interface IAxiosCard {
  works: ICard[];
}

const Work = () => {
  const [cards, setCards] = useState<ICard[]>([]);

  const getCards = async () => {
    const response = await axios.get<IAxiosCard>("./works.json");
    const data: ICard[] = response.data.works;
    setCards(data);
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="work">
      <SectionTitle text="Work" />
      <div className="workContent">
        {cards.map(
          ({ id, deploy, description, images, repo, stack, title }) => {
            return (
              <Card
                    key={id}
                    deploy={deploy}
                    description={description}
                    images={images}
                    repo={repo}
                    stack={stack}
                    title={title} id={id}
                />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Work;

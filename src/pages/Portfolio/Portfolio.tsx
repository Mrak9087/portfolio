import React, { useEffect, useState } from 'react';

import axios from 'axios';

import './portfolio.css';

import Card from '../../component/Card';
import SectionTitle from '../../component/SectionTitle';
import { IWork, IAxiosCard } from '../../model/interfaces';
import { useTranslation } from 'react-i18next';
import Loader from '../../component/Loader';

const Portfolio = () => {
  const [cards, setCards] = useState<IWork[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const {t} = useTranslation();

  const getCards = async () => {
    setIsLoading(true);
    const response = await axios.get<IAxiosCard>('./works.json');
    const data: IWork[] = response.data.works.reverse();
    setCards(data);
    setIsLoading(false);
    
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="portfolio">
      <SectionTitle text={t('menu.portfolio')} />
      <div className="portfolioContent">
        {isLoading ? (
          <Loader />
        ) : (
          cards.map(({ id, deploy, description, images, repo, stack, title, name }) => {
            const descr = t('cards.'+name)
            return (
              <Card key={id} description={descr} images={images} title={title} name={name} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Portfolio;

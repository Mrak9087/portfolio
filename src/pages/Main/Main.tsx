import React from 'react';
import { useTranslation } from 'react-i18next';
import ListString from '../../component/ListString';
import SectionTitle from '../../component/SectionTitle';
import { useEdList, useExpList, skillList } from '../../helpers/lists';

import './main.css';

const Main = () => {

  const {t} = useTranslation();
  const edList = useEdList();
  const expList = useExpList();

  return (
    <div className="main">
      <div className="mainRow">
        <div className="wrapperRow">
          <div className="mainInfo">
            <h3 className="hello">
              {t('home.greeting')} <span>{t('home.name')}</span>
            </h3>
            <h3 className="myProfession">
              {t('home.I')} <span className="typing">{t('home.typing')}</span>
            </h3>
            <p>
              {t('home.description')}
            </p>
          </div>
          <div className="mainImg">
            <img src="./photo.jpg" alt="my photo" />
          </div>
        </div>
      </div>
      <div className="mainRow">
        <SectionTitle text={t('home.titleSkills')} />
        <ListString list={skillList} />
      </div>
      <div className="mainRow">
        <SectionTitle text={t('home.titleEducation')} />
        <ListString list={edList} />
      </div>
      <div className="mainRow">
        <SectionTitle text={t('home.titleExperience')} />
        <ListString list={expList} />
      </div>
    </div>
  );
};

export default Main;

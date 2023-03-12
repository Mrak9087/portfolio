import { faGithub, faOctopusDeploy } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import Loader from '../../component/Loader';
import SectionTitle from '../../component/SectionTitle';
import { IAxiosCard, IWork } from '../../model/interfaces';
import './work.css';

const Work = () => {
  const { work } = useParams();
  const [workItem, setWorkItem] = useState<IWork>();
  const [isLoading, setIsLoading] = useState(false);
  const {t} = useTranslation();
  
  const isWorkExists = useMemo(()=>{
    if (workItem) return true;
    return false;
  },[workItem])

  const getWork = async () => {
    setIsLoading(true);
    const response = await axios.get<IAxiosCard>('/works.json');
    const data = response.data.works.find((item) => item.name === work);
    setWorkItem(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getWork();
  }, []);

  if (!isWorkExists && !isLoading) {
    return <div className='notFound'>Work is not found</div>
  }

  return (
    <div className="work">
      <SectionTitle text={workItem ? workItem.title : ''} />
      <div className="workContent">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="workDescr">{t('cards.'+workItem?.name)}</div>
            <div className="workLinks">
              <div className="linkItem">
                <a href={workItem?.repo} target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                  <span>GitHub</span>
                </a>
              </div>
              <div className="linkItem">
                <a href={workItem?.deploy} target="_blank">
                  <FontAwesomeIcon icon={faOctopusDeploy} />
                  <span>Deploy</span>
                </a>
              </div>
            </div>
            <div className="workTechnologies">
              <span>{t('work.tech')}: </span>
              <span>{workItem?.stack}</span>
            </div>
            <div className="workImages">
              {workItem?.images.map((item, index) => (
                <img key={index} src={`/images/${item}`} alt={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Work;

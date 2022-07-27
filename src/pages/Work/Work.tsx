import { faGithub, faOctopusDeploy } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { memo, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import SectionTitle from "../../component/SectionTitle";
import { IAxiosCard, IWork } from "../../model/interfaces";
import "./work.css";



const Work = () => {
    const {work} = useParams();
    const [workItem, setWorkItem] = useState<IWork>();

    const getWork = async() => {
        const response = await axios.get<IAxiosCard>("/works.json");
        const data = response.data.works.find(item => item.name === work);
        setWorkItem(data)
    }

    useEffect(()=>{
      getWork();
    },[])

  return (
    <div className="work">
        <SectionTitle text={workItem ? workItem.title : ""} />
        <div className="workContent">
          <div className="workDescr">{workItem?.description}</div>
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
            <span>Technologies: </span><span>{workItem?.stack}</span>
          </div>
          <div className="workImages">
            {workItem?.images.map((item,index) => <img key={index} src={`/images/${item}`} alt={item} />)}
          </div>
        </div>
    </div>
  )
};

export default Work;

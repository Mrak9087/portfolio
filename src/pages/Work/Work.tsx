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
    <div>
        <SectionTitle text={workItem ? workItem.title : ""} />
    </div>
  )
};

export default Work;

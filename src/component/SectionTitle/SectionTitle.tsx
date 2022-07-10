import React from "react";

import './sectionTitle.css';

interface ISectionTitle {
    text:string;
}

const SectionTitle = ({text}:ISectionTitle) => {
  return (
    <div className="sectionTitle">
      <h2>{text}</h2>
    </div>
  );
};

export default SectionTitle;

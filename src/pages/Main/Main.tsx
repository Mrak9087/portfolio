import React from 'react';
import Container from '../../component/Container';
import ListString from '../../component/ListString';
import SectionTitle from '../../component/SectionTitle';
import { edList, exList, skillList } from '../../helpers/lists';

import './main.css';

const Main = () => {
  return (
    <div className="main">
      <div className="mainRow">
        <div className="wrapperRow">
          <div className="mainInfo">
            <h3 className="hello">
              Hello, my name is <span>Maxim</span>
            </h3>
            <h3 className="myProfession">
              I`m a <span className="typing">Frontend Developer</span>
            </h3>
            <p>
              I have been working in IT since 2010. Mostly worked as a system administrator and as a
              programmer. At work I often had to program. I have experience in programming in
              Delphi. I created clients to work with databases: MS SQL, MySQL, Firebird. The
              institute had a course on HTMS, CSS. After graduation, I was engaged in page layout
              for some time. Participated in the development of the Institute's website. I’ve also
              created an application for learning languages on React and project management system
              Trello-clone on React + Typescript. I want to become a professional developer. I am
              ready to develop in this direction.
            </p>
          </div>
          <div className="mainImg">
            <img src="./photo.jpg" alt="my photo" />
          </div>
        </div>
      </div>
      <div className="mainRow">
        <SectionTitle text="Skills" />
        <ListString list={skillList} />
      </div>
      <div className="mainRow">
        <SectionTitle text="Education" />
        <ListString list={edList} />
      </div>
      <div className="mainRow">
        <SectionTitle text="Experience" />
        <ListString list={exList} />
      </div>
    </div>
  );
};

export default Main;

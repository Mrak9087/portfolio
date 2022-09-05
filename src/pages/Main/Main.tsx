import React from 'react';
import Container from '../../component/Container';
import SectionTitle from '../../component/SectionTitle';

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
        <ul className="skillList">
          <li>HTML, CSS, SCSS, JavaScript, Typescript</li>
          <li>React, Redux</li>
          <li>Git, GitHub</li>
          <li>REST API, Axios</li>
          <li>Visual Studio Code, WebStorm</li>
          <li>Delphi (Rad Studio)</li>
          <li>SQL</li>
        </ul>
      </div>
      <div className="mainRow">
        <SectionTitle text="Education" />
        <ul className="edList">
          <li>
            Balashovsky Institute of Saratov State University / Applied Informatics in Economics
          </li>
          <li>Courses RS School / JS/FE PRE-SCHOOL</li>
          <li>Courses RS School / JAVASCRIPT/FRONT-END 2021Q3</li>
          <li>Courses RS School / REACT 2022 Q1</li>
        </ul>
      </div>
      <div className="mainRow">
        <SectionTitle text="Experience" />
        <ul className="expList">
          <li>2008 - 2009 / Balashovsky Institute of Saratov State University / Laboratorian</li>
          <li>
            2010 - 2011 / Balashovsky Institute of Saratov State University / Engineer (Developer)
          </li>
          <li>2011 - 2015 / Social support / Leading Specialist (System administrator)</li>
          <li>2015 - 2018 / Urban Heating Networks Balashov / Specialist (System administrator)</li>
          <li>2018 - 2019 / Urban Heating Networks Balashov / Network administrator</li>
          <li>2020 - until now / MFC / Leading Specialist (System administrator)</li>
        </ul>
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import Container from "../../component/Container";

import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="mainContainer">
        <div className="mainInfo">
          <h3 className="hello">
            Hello, my name is <span>Maxim</span>
          </h3>
          <h3 className="myProfession">
            I`m a <span className="typing">Frontend Development</span>
          </h3>
          <p>
            I have experience in programming in Delphi. I created clients to work with
            databases: MS SQL, MySQL, Firebird. I know SQL. Basic knowledge of
            Java. The institute had a course on HTMS, CSS. After graduation, I
            was engaged in page layout for some time. I love solving various
            puzzles. I want to become a professional developer. I am ready to
            develop in this direction.
          </p>
        </div>
        <div className="mainImg">
          <img src="./photo.jpg" alt="my photo" />
        </div>
      </div>
    </div>
  );
};

export default Main;

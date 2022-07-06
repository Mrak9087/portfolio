import React from "react";
import Container from "../../component/Container";

import './main.css';

const Main = () => {
    return (
        <div className="main">
            <div className="mainContainer">
                <div className="mainInfo">
                    <h3>Hello, my name is <span>Maxim</span></h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Ex rem animi aperiam laborum vel amet facilis perspiciatis ducimus? 
                        Pariatur inventore eius ipsa eos voluptas, praesentium adipisci incidunt deserunt animi fugit?
                    </p>
                    <div className="mainImg">
                        <img src="" alt="my photo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
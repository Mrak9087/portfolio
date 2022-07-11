import React from "react";
import Card from "../../component/Card";
import SectionTitle from "../../component/SectionTitle";
import "./work.css"

const Work = () => {
    return (
        <div className="work">
            <SectionTitle text="Work" />
            <div className="workContent">
                <Card />
            </div>
        </div>
    )
}

export default Work;
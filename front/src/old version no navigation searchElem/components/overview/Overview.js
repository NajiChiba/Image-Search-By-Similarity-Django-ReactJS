import React from "react";
import "./overview.css";
import "../../App.css";

function Overview() {
  const oevrview = [
    {
      title: "Histogram definition",
      id: 1,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      title: "Use Cases",
      id: 2,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      title: "Adventages",
      id: 3,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      title: "Time Gain",
      id: 4,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      title: "Overview",
      id: 5,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      title: "result",
      id: 6,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  ];
  return (
    <div className="overview">
      <h6>Project Overview</h6>
      <div className="main">
        {oevrview.map((elem) => (
          <div key={elem.id}  className="element">
            <div className="imagecont">
              <img
                src={
                  require(`../../assets/images/icons/${elem.id}.png`).default
                }
                alt=""
              />
            </div>
            <h3>{elem.title}</h3>
            <p>{elem.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overview;

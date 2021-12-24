import React from "react";
import "../../App.css";
import "./aboutus.css";

function Aboutus() {
  const team = [
    {
      name: "Abdenaji Chiba",
      image: "1.png",
      tache: "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
      name: "Aymane Oulad Benhammou",
      image: "2.png",
      tache: "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
      name: "Imane Et-teboudy",
      image: "3.png",
      tache: "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
  ];
  return (
    <div className="aboutus">
      <h1> Project Team </h1>
      <div className="members">
        {team.map((member) => (
          <div key={member.name} className="member">
            <div className="pic">
              <img
                src={
                  require(`../../assets/images/team/${member.image}`).default
                }
                alt=""
              />
            </div>
            <h2>{member.name}</h2>
            <p>{member.tache}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aboutus;

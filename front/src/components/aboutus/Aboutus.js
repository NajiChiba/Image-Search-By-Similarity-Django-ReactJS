import React from "react";
import "../../App.css";
import "./aboutus.css";

function Aboutus() {
  const team = [
    {
      name: "Abdenaji Chiba",
      image: "1.jpg",
      tache: "Lorem ipsum dolor sit amet consectetur adipisicing",
      site: "https://linktr.ee/AbdenajiChiba",
    },
    {
      name: "Aymane Oulad Benhammou",
      image: "4.jpeg",
      tache: "Lorem ipsum dolor sit amet consectetur adipisicing",
      site: "https://www.linkedin.com/in/aymane-oulad-benhamou/",
    },
    {
      name: "Imane Et-teboudy",
      image: "3.jpeg",
      tache: "Lorem ipsum dolor sit amet consectetur adipisicing",
      site: "https://www.linkedin.com/in/imane-et-teboudy-b9766919b/",
    },
  ];
  return (
    <div className="aboutus">
      <h1> Project Team </h1>
      <div className="members">
        {team.map((member) => (
          <a key={member.name} className="member_link" target="_blank" rel='noreferrer noopener' href={member.site}>
            <div className="member">
              <div className="pic">
                <img
                  src={
                    require(`../../assets/images/team/${member.image}`)
                  }
                  alt=""
                />
              </div>
              <h2>{member.name}</h2>
              <p>{member.tache}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Aboutus;

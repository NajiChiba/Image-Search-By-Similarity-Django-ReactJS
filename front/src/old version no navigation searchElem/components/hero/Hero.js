import React from "react";
import "../../App.css";
import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <div className="container">
        <h1>Searching Is Easy</h1>
        <h4> Findit allows you to search for images using your image referece </h4>
        <div className="buttons">
            <div className="learn-more">LEARN MORE</div>
            <div className="start">START</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

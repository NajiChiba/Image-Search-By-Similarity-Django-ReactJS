import React from "react";
import { Link } from "react-scroll";
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
            <a className="learn_more_link" rel='noreferrer noopener' href="https://en.wikipedia.org/wiki/Color_histogram#:~:text=In%20image%20processing%20and%20photography,set%20of%20all%20possible%20colors."  target={'_blank'}><div className="learn-more">LEARN MORE</div></a>
            <Link to="overview" smooth={true} duration={600} offset={-40} className="start_link start"><div className="start">START</div></Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import { React, useState } from "react";
import "./navbar.css";
import "../../App.css";
import { Link as LinkS } from "react-scroll";
import {Link} from 'react-router-dom';

function Navbar({activeNav, handleNav}) {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  
  const changeBackground = () => {
    if (window.scrollY > 160) {
      setToggleNavbar(true);
    } else {
      setToggleNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const menuItems = [
    {
      name: "Home",
      path: "hero",
    },
    {
      name: "Overview",
      path: "overview",
    },
    {
      name: "About Us",
      path: "aboutus",
    },
    {
      name: "Search",
      path: "search",
    },
  ];

  return (
    <nav className={activeNav ? "active" : (toggleNavbar ? "active" : "") }>
      <div className="logo"> {activeNav ? <Link to={'/'} >findit</Link> : <LinkS to={'hero'} smooth={true} duration={600} offset={-40}>findit</LinkS>}
           </div>
      <ul className="navelem">
        {menuItems.map((item) => (
          <li key={item.name}>
            {activeNav ? <Link to={'/'} >{item.name}</Link> : <LinkS to={`${item.path}`} smooth={true} duration={600} offset={-40}>{item.name}</LinkS>}
          </li>
        ))}
      </ul>

      <div className="btn">
        <div className="button">
          <h4>LET'S GO</h4>
        </div>
        <div className="button back">
          <h4>back</h4>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

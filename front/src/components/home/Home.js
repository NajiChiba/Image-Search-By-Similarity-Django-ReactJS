import React from "react";
import Aboutus from "../aboutus/Aboutus";
import Hero from "../hero/Hero";
import Overview from "../overview/Overview";
import Search from "../search/Search";
import useActive from "../hooks/useActive";

function Home({ handleNav }) {
  
  useActive(handleNav, false);

  return (
    <>
      <Hero id="hero" />
      <Overview id="overview" />
      <Aboutus id="aboutus" />
      <Search id="search" />
    </>
  );
}

export default Home;

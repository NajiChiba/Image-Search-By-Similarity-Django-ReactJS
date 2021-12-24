import "./App.css";
import Home from "./components/home/Home";
import SearchPage from "./components/searchpage/SearchPage";
import Navbar from "./components/navbar/Navbar";
import {  useState } from 'react';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import SearchElem from "./components/searchpage/SearchElem";
import UploadTest from "./components/UploadTest/UploadTest";
import TestPost from "./components/TestPost/TestPost";
import AddDistance from "./components/AddDistance/AddDistance";
import Images from "./components/getimages/Images";
import GenerateDistances from "./components/GenerateDistances/GenerateDistances";

function App() {
  const [activeNav, setAvtiveNav] = useState(true);
  
  const handleNav = (val) => {
    setAvtiveNav(val);
  };

  return (
    <Router>
      <ScrollToTop/>
      <div className="App">
        <Navbar activeNav={activeNav}/>
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Home handleNav={handleNav}/>} />
            {/* <Route path="/" exact>
              <Home handleNav={handleNav} />
            </Route> */}
            <Route path="/searchpage" exact element={<SearchPage activeNav={activeNav} handleNav={handleNav} endPoint={"http://localhost:8000/api/images"}/>} />
            {/* <Route  path="/searchpage" exact>
              <SearchPage activeNav={activeNav} handleNav={handleNav} endPoint={"http://localhost:8000/api/images"}/>
            </Route> */}
            <Route path="/search/:id" exact element={<SearchElem activeNav={activeNav} handleNav={handleNav} endPoint={"http://localhost:8000/api/images"}/>} />
            {/* <Route path="/search/:id">
              <SearchElem activeNav={activeNav} handleNav={handleNav} endPoint={"http://localhost:8000/api/images"}/>
            </Route> */}
            <Route path="/upload" exact element={<UploadTest endPoint={"http://localhost:8000/api/images"}/>} />
            {/* <Route path="/upload" exact>
              <UploadTest endPoint={"http://localhost:8000/api/images/create"}></UploadTest>
            </Route> */}
            <Route path="/create" exact element={<TestPost/>} />
            <Route path="/images" exact element={<Images/>} />
            <Route path="/add-distance" exact element={<AddDistance/>} />
            <Route path="/distance-generate" exact element={<GenerateDistances/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import "./search.css";
import "../../App.css";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Search() {
  return (
    <>
      <Link to={"searchpage"} className="search">
        <div className="search-btn">
          <h6>Start the search</h6>
          <div className="arrow">
            <FaChevronRight className="arrow-icon" />
          </div>
        </div>
        <div className="search-back">
          <h6>Start the search</h6>
          <div className="arrow">
            <FaChevronRight className="arrow-icon" />
          </div>
        </div>
      </Link>
    </>
  );
}

export default Search;

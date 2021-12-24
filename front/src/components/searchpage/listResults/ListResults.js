import React from "react";
import "../searchpage.css";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

function ListResults({ myData }) {
  return (
    <>
      {myData.map((elem) => (
        elem !== null ?
        (<div key={elem.id} className="img_elem">
          <img src={elem.image} alt="" />
          <div className="overlay_img"></div>
          <div className="search_btn">
            <Link className="path_link" to={`/search/${elem.id}`}>
              <h6>search</h6> <FiSearch className="search_icon" />
            </Link>
          </div>
        </div>) : <></>
      ))}
    </>
  );
}

export default ListResults;

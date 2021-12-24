import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

function ImgElement({ id, path }) {
  return (
    <>
      <div key={id} className="img_elem">
        <img src={path} alt="" />
        <div className="overlay_img"></div>
        <div className="search_btn">
          <Link className="path_link" to={`/search/${id}`}>
            <h6>search</h6> <FiSearch className="search_icon" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default ImgElement;

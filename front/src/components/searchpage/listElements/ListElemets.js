import React from "react";
import "../searchpage.css";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Spinner from "../../spinner/Spinner";

function ListElements({ myDataList }) {
  return (
    <>
      <div className="images_grid">
        {myDataList !== null ? (
          myDataList.map((elem) =>
            elem !== null ? (
              <div key={elem.id} className="img_elem">
                <img src={`http://localhost:8000${elem.image}`} alt="" />
                <div className="overlay_img"></div>
                <div className="search_btn">
                  <Link className="path_link" to={`/search/${elem.id}`}>
                    <h6>search</h6> <FiSearch className="search_icon" />
                  </Link>
                </div>
              </div>
            ) : (
              <></>
            )
          )
        ) : (
          <div className="spinner_container"><Spinner/></div>
          
        )}
      </div>
    </>
  );
}

export default ListElements;

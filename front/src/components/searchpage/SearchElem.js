import React,{ useState, useEffect } from "react";
import "../../App.css";
import "./searchpage.css";
import useActive from "../hooks/useActive";
import { FiSearch } from "react-icons/fi";
import { useParams } from "react-router-dom";
import axios from "axios";
import ListResults from "./listResults/ListResults";
import Spinner from "../spinner/Spinner";

function SearchElem({ handleNav }) {
  const { id } = useParams();

  useActive(handleNav, true);

  const [myData, setMyData] = useState(null);

  const [searchedElem, setSearchedElem] = useState(null);

  const endPoint = "http://localhost:8000/api/images";

  useEffect(() => {
    // get the searched image
    console.log(id)
    
    let fetchPromise = fetch(`http://localhost:8000/api/images/${id}`);
    fetchPromise.then(response => {
      return response.json();
    }).then(image => {
          setSearchedElem(image.searchedImage);
          setMyData(image.results)
    });

    return () => {
      setSearchedElem(null);
    };
  }, [id]);

  let get

  return (
    <div className="search_page">
      <div className="main_bg"></div>
      <div className="elems">
        <h6 className="result_title">Search Results</h6>

        <div className="images_grid">
          <div className="img_elem_search">
            {searchedElem === null ? (
              <div className="loading">
                <Spinner />
              </div>
            ) : (
              <img src={`${searchedElem.image}`} alt="" />
            )}
            <div className="overlay_img"></div>
            <div className="search_btn" onClick={() => {}}>
              <h6>search</h6> <FiSearch className="search_icon" />
            </div>
          </div>

          <div className="empty_el">
            <h6>Results</h6>

            {searchedElem === null ? (
              <Spinner />
            ) : (
              <p>{`id ${searchedElem.id}  path:${searchedElem.image}`}</p>
            )}
          </div>

          {myData === null ? (
            <div className="loading">
              <Spinner />
            </div>
          ) : (
            <ListResults myData={myData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchElem;

import { React, useState } from "react";
import "../../App.css";
import "./searchpage.css";
import useActive from "../hooks/useActive";
import { BsDownload } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import axios from "axios";

function SearchPage({ handleNav }) {
  useActive(handleNav, true);

  const [myData, setMyData] = useState(null);

  const [gettingData, setGettingData] = useState(true);

  const [searchedElem, setSearchedElem] = useState(null);

  const data = [
    {
      id: 1,
      path: "/assets/images/images/1.jpg",
    },

    {
      id: 2,
      path: "/assets/images/images/2.jpg",
    },

    {
      id: 3,
      path: "/assets/images/images/3.jpg",
    },

    {
      id: 4,
      path: "/assets/images/images/4.jpg",
    },

    {
      id: 5,
      path: "/assets/images/images/5.jpg",
    },

    {
      id: 6,
      path: "/assets/images/images/6.jpg",
    },

    {
      id: 7,
      path: "/assets/images/images/7.jpg",
    },

    {
      id: 8,
      path: "/assets/images/images/8.jpg",
    },

    {
      id: 9,
      path: "/assets/images/images/9.jpg",
    },

    {
      id: 10,
      path: "/assets/images/images/10.jpg",
    },

    {
      id: 11,
      path: "/assets/images/images/11.jpg",
    },

    {
      id: 12,
      path: "/assets/images/images/12.jpg",
    },

    {
      id: 13,
      path: "/assets/images/images/13.jpg",
    },

    {
      id: 14,
      path: "/assets/images/images/14.jpg",
    },

    {
      id: 15,
      path: "/assets/images/images/15.jpg",
    },

    {
      id: 16,
      path: "/assets/images/images/16.jpg",
    },

    {
      id: 17,
      path: "/assets/images/images/17.jpg",
    },

    {
      id: 18,
      path: "/assets/images/images/18.jpg",
    },

    {
      id: 19,
      path: "/assets/images/images/19.jpg",
    },

    {
      id: 20,
      path: "/assets/images/images/20.jpg",
    },

    {
      id: 21,
      path: `/assets/images/images/21.jpg`,
    },
  ];

  const endPoint = 'http://localhost:8000/images';

  const searchImg = (id) => {
    setGettingData(false);
    setSearchedElem(data[id]);
    setMyData(null);

    // post searched elem
    // const searchImg = {
    //   // id: searchedElem.id,
    //   path: searchedElem.path
    // };

    // axios
    //   .post(endPoint, { searchImg })
    //   .then((res) => {  
    //     return res;  //geting the response data
    //   })
    //   .then((res) => {  
    //     console.log(res.data);
    //     setMyData(res.data);  // stock the data on myData var
    //   });

    // this is just a test
    axios
      .get(endPoint)
      .then((res) => {
        return res;
      })
      .then((res) => {
        console.log(res.data);
        setMyData(res.data);
      });
  };

  return (
    <div className="search_page">
      <div className="main_bg"></div>
      <div className="elems">
        <h6>Search Page</h6>
        <div className="upload-btn">
          <h6>Upload Image</h6>
          <BsDownload className="download-icon"></BsDownload>
        </div>
        {gettingData ? (
          <div className="images_grid">
            {data.map((elem) => (
              <div key={elem.id} className="img_elem">
                <img src={elem.path} alt="" />
                <div className="overlay_img"></div>
                <div
                  className="search_btn"
                  onClick={() => {
                    searchImg(elem.id);
                  }}
                >
                  <h6>search</h6> <FiSearch className="search_icon" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="images_grid">
            <div className="img_elem_search">
              <img src={`${searchedElem.path}`} alt="" />
              <div className="overlay_img"></div>
              <div
                className="search_btn"
                onClick={() => {
                  searchImg(searchedElem.id);
                }}
              >
                <h6>search</h6> <FiSearch className="search_icon" />
              </div>
            </div>

            <div className="empty_el">
              <h6>Results</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae facilis reiciendis quia tempora voluptatem
                molestias, culpa voluptate recusandae{" "}
              </p>
            </div>

            {myData === null ? (
              <div className="loading">
                <h2>Loading...  (spiner) </h2>
              </div>
            ) : (
              myData.map((elem) => (
                <div key={elem.id} className="img_elem">
                  <img src={elem.path} alt="" />
                  <div className="overlay_img"></div>
                  <div
                    className="search_btn"
                    onClick={() => {
                      searchImg(elem.id);
                    }}
                  >
                    <h6>search</h6> <FiSearch className="search_icon" />
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;

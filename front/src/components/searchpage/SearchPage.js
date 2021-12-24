import "../../App.css";
import "./searchpage.css";
import React from "react";
import useActive from "../hooks/useActive";
import { BsDownload } from "react-icons/bs";
import { BsSave } from "react-icons/bs";
import ListElements from "./listElements/ListElemets";
import useUpload from "../hooks/useUpload";

function SearchPage({ handleNav }) {
  useActive(handleNav, true);

  const endPoint = "http://localhost:8000/api/images";

  const {
    imageSelectHandler, // stock the image in 'myImage' variable that we will be affected after to the FormData (in 'imageSaveHandler' function)
    imageSaveHandler, // the  server response should contain : image_path, image id,
    // 1- create 'formData' variable that contains our 'myImage',
    // 2- post the 'formData' to the server,
    // 3- the server stocks on /front/public/media => "myImage",
    // 4- the response in {id, path} of "myImage"
    // 5- we stock the response on 'searchedImage' and we add it the list "myDataList"
    myImage, // file image
    imageInput, // reference (dom in javascript)
    myDataList, // see -5-   this is the list that will be shown on the page
    isUploading,
  } = useUpload(endPoint);


  return (
    <div className="search_page">
      <div className="main_bg"></div>
      <div className="elems">
        <h6>Search Page</h6>
        <input
          ref={imageInput}
          style={{ display: "none" }}
          type="file"
          onChange={imageSelectHandler}
        />
        <button
          className="upload_btn"
          onClick={() => {
            imageInput.current.click();
          }}
        >
          <h6>Upload Image</h6>
          <BsDownload className="download-icon"></BsDownload>
        </button>

        <button
          className={
            (isUploading)
              ? "save_btn upload_btn save_visible"
              : "save_btn upload_btn save_invisible"
          }
          onClick={imageSaveHandler}
        >
          <h6>Save</h6>
          <BsSave className="download-icon"></BsSave>
        </button>

        <ListElements myDataList={myDataList} />
      </div>
    </div>
  );
}

export default SearchPage;

// import axios from "axios";
import React, { useEffect } from "react";
import { BsDownload } from "react-icons/bs";
import useUpload from "../hooks/useUpload";
import "./UploadTest.css";

function UploadTest({ endPoint }) {
  const {
    fileSelectedHandler,
    fileUploadHandler,
    uploadedFile,
    uploadPercentage,
    fileInput,
  } = useUpload(endPoint);

  useEffect(() => {
    console.log("file uploaded")
    // console.log(file);
    console.log(uploadedFile);
    console.log(uploadPercentage + "%");
    console.log(endPoint);
  }, [endPoint, uploadPercentage, uploadedFile]);

  return (
    <div className="upload">
      <input
        ref={fileInput}
        style={{ display: "none" }}
        type="file"
        onChange={fileSelectedHandler}
      />
      <button
        className="upload_btn_tst"
        onClick={() => {
          fileInput.current.click();
        }}
      >
        <h6>Upload Image</h6>
        <BsDownload className="download-icon"></BsDownload>
      </button>
      <button className="btn-up" onClick={fileUploadHandler}>Upload file</button>
    </div>
  );
}

export default UploadTest;

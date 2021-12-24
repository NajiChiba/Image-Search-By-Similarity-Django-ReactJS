import axios from "axios";
import { useEffect, useRef, useState } from "react";

const useUpload = (endPoint) => {
  const [myImage, setmyImage] = useState(null);
  const [searchedImage, setSearchedImage] = useState({ id: null, path: "" });
  const imageInput = useRef(null);
  const [myDataList, setmyDataList] = useState([]);
  const [isUploading, setisUploading] = useState(false);

  const dataList = () => {

    const fetchPromise = fetch("http://localhost:8000/api/images/");
    fetchPromise.then(response => {
      return response.json();
    }).then(images => {
      setmyDataList(images);
        
    });
  }

  useEffect(() => {
    
    if (searchedImage.id !== null && searchedImage.path !== "") {
      myDataList.unshift(searchedImage);
      console.log(typeof myDataList)
    }

    // setmyDat aList(dataList);
    setisUploading(false);
    dataList()

  }, [searchedImage]);

  // selectt the image
  const imageSelectHandler = (e) => {
    setmyImage(e.target.files[0]);
    setisUploading(true);
  };

  const imageSaveHandler = (e) => {
    const formData = new FormData();
    formData.append('title', "this is title");
    formData.append('image', myImage);

    // POST the file
    try {

      axios
        .post("http://localhost:8000/api/images/create", formData)
        .then((res) => {
          return res; //geting the response data
        })
        .then((res) => {
          const {id, path} = {id:res.data['id'], path:res.data['image']};
          setSearchedImage({ id:id, path: path });
        });
    } catch (err) {
      // show alert
      console.log(err);
    }
  };

  return {
    imageSelectHandler,
    imageSaveHandler,
    searchedImage,
    imageInput,
    myImage,
    myDataList,
    isUploading,
  };
};

export default useUpload;

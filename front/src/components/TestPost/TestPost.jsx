import React, { useState, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom'


function TestPost() {

    let [title, setTitle] = useState()
    let [image, setImage] = useState()

    let fileInput = React.createRef();



    let newImage = () => {
        console.log(title)
        console.log(image.name)

        let data = new FormData()

        data.append('title', title)
        data.append('image', image)
        
        fetch('http://localhost:8000/api/images/create', {
            method: 'POST', 
            body: data
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }


    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
           <h3>
               Upload images with React
           </h3>
            <br />
           <label >Title   : </label>
           <input type="text" defaultValue={title} onChange={(e) => {setTitle(e.target.value)}} />
           <br />
           <br />
           <label>Image   : </label>
           <input type="file" ref={fileInput} onChange={(e) => {setImage(e.target.files[0])}} />
        <br />
        <br />
            <button onClick={() => newImage()} >Add Image</button>
        </div>
    )
}

export default TestPost



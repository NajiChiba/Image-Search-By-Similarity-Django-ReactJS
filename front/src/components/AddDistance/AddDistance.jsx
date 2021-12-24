import React, { useState } from 'react'

const AddDistance = () => {

    let [img1, setImg1] = useState()
    let [img2, setImg2] = useState()


    let newDistance = () => {
        console.log(img1)
        console.log(img2)

        let data = new FormData()

        data.append('img1', img1)
        data.append('img2', img2)
        
        fetch('http://localhost:8000/api/distance/create', {
            method: 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
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
               Add Distance
           </h3>
            <br />
           <label > Image 1  ID : </label>
           <input type="text" defaultValue={img1} onChange={(e) => {setImg1(e.target.value)}} />
           <br />
            <br />
           <label > Image 2  ID : </label>
           <input type="text" defaultValue={img2} onChange={(e) => {setImg2(e.target.value)}} />
           <br />
           <br />
        <br />
        <br />
            <button onClick={() => newDistance()} >Add Distance</button>
        </div>
    )
}

export default AddDistance

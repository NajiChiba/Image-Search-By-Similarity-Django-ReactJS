import React, {useState, useEffect} from 'react'

import ImageItem from './ImageItem';

const Images = () => {

    let [images, setImages] = useState([]);

    useEffect(() => {
        getImages()
    }, [])


    let getImages = async ()=> { 

        let response = await fetch('/api/images/')
        let data = await response.json()
        
        console.log('Data : ', data)

        setImages(data)
    }

    return (
        <div className='images'>
            <div className='images-header'>
                <h2 className="images-title">
                    &#9782; images
                </h2>
                <p className="images-count">{images.length}</p>
            </div>

            <div className="images-list">
                {images.map((image, index) => (
                    <ImageItem key={index} image={image} />
                    // <div key={index}>
                    //     {image}
                    // </div>
                ))}
            </div>


        
        </div>
    )
}

export default Images

import React from 'react'

const ImageItem = ({image}) => {

    let getTitle = (image) => {
        return image.title
    }

    let getUrl = (image) => {
        return image.url
    }

    let getImage = (image) => {
        return image.image
    }


    return (
        <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis augue vel elit tincidunt, ac hendrerit augue tincidunt. Mauris quis viverra nulla, nec tempor ligula. Nullam dapibus quam nunc, ac pellentesque lorem efficitur ac. Pellentesque dignissim, nulla at lacinia euismod, lacus diam mattis arcu, vel ornare odio erat id massa. Integer urna neque, mollis eleifend elit in, vulputate fringilla elit. Sed ac auctor libero, quis dignissim metus. Sed eu ante commodo, molestie urna a, lacinia nisl. Pellentesque vehicula mi at ligula pellentesque, vel finibus magna vulputate. Integer quis libero quis enim eleifend sollicitudin et eget dui. Donec et varius dolor, sed pellentesque ex. Vivamus lacinia dictum porttitor. Nam purus orci, maximus vel consequat at, malesuada quis lacus. In hac habitasse platea dictumst. Pellentesque et dolor tortor. In enim massa, mollis eu molestie vel, vestibulum ut dolor. Nam dolor arcu, condimentum sit amet posuere sed, congue eu erat.
            </p>
            <h2>
                {getTitle(image)}
                <br />
                {getImage(image)}
            </h2>
        </div>
    )
}

export default ImageItem

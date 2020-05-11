import React from 'react';

const ImageList = (props) => {
    const img = props.images.map((image) => {
        return <img src={image.webformatURL} alt="pic"/>
    })
    return(
        <div>
            {img}
        </div>
    )
}

export default ImageList;
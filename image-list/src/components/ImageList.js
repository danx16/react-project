import React from 'react';

const ImageList = (props) => {
    const ImageList = props.images.map((image) => {
        return <img key={image.id} src={image.webformatURL} alt="pic"/>
    })
    return(
        <div>
            {ImageList}
        </div>
    )
}

export default ImageList;
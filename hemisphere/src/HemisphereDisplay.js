import React from 'react';
import NorthernPic from './image/NorthernHemisphere.jpg';
import SouthernPic from './image/SouthernHemisphere.jpg';

const HemisphereDisplay = ({latitude}) => {

    //Identical Ternary

    const hemisphere = latitude > 0 ? 'Northern Hemisphere' : 'Southern Hemisphere'
    const hemispherePic = latitude > 0 ? NorthernPic : SouthernPic

    return (
        <div>
            { hemisphere }
            <div>        
                <img src={ hemispherePic } alt="" />
            </div>
        </div>
        )
}


export default HemisphereDisplay;
import React from 'react';
import './Hemisphere.css';
import NorthernPic from './image/NorthernHemisphere.jpg';
import SouthernPic from './image/SouthernHemisphere.jpg';

const hemisphereConfig = {
    Northern: {
        text: 'It is northern hemisphere',
        picture: NorthernPic
    },
    Southern: {
        text: 'It is southern hemisphere',
        picture: SouthernPic
    }
}

const HemisphereDisplay = ({latitude}) => {

    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    /* 
        Reference back down inside of component hemisphere config square brackets inside of it.
        Return object with a text and picture name inside of this object
        Pull out that text and picture name 
    */
    const { text, picture } = hemisphereConfig[hemisphere] 

    return (
        <div className={ hemisphere } > 
            <div className='ui raised text container segment'>
                <div className='image'>
                    <img src={picture} alt="Hemisphere Pic"/>
                </div>
                <div className='ui teal bottom attached label'>
                    <h1> { text } </h1>
                </div>
            </div>  
        </div>
    )
}

export default HemisphereDisplay;
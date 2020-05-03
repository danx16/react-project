import React from 'react';

const HemisphereDisplay = ({latitude}) => {
    console.log(latitude);
    
    //Ternary Expression

    const hemisphere = latitude > 0 ? 'Northern Hemisphere' : 'Southern Hemisphere'

    return (
        <div> 
            { hemisphere }
        </div>
        )
}

// { } = Use those curly braces if I want to reference a javascript variable

export default HemisphereDisplay;
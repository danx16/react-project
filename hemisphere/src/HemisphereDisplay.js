import React from 'react';

/* const HemisphereDisplay = (props) => {
    console.log(props.latitude);
    return (
        <div>Sample</div>
        )
} */

// Deconstruction syntax
// Use specific property which is latitude instead of props
// and call it as latitude instead of props.latitude

const HemisphereDisplay = ({latitude}) => {
    console.log(latitude);
    return (
        <div>Sample</div>
        )
}


export default HemisphereDisplay;
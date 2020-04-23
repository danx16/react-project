import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';

/*  COMPARISON BETWEEN 
    FUNCTIONAL COMPONENT 
    AND 
    CLASS-BASED COMPONENT
*/


// FUNCTIONAL COMPONENT

const App = () => {
    // Getting users physical location
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (error) => console.log(error)
    )

    return (
        <div>
            {/* <HemisphereDisplay /> */}
            Latitude: 
        </div>
    )
}

// CLASS BASED COMPONENT
// Refactor App Component

class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (error) => console.log(error)
        return(
            <div>You are in the northern hemisphere</div>
        )
    }
}



ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
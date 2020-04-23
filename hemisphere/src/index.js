import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';

// CLASS-BASED COMPONENT
// Refactor App Component

class App extends React.Component { // It is allow us to put a ton of built in functionality from this other class called React Component into our class
    
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)
        );
        return(
            <div>
                You are in the northern hemisphere
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
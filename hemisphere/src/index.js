import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';

// CLASS-BASED COMPONENT
// Refactor App Component

class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)
        );
        return (
            <div>
                sample
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
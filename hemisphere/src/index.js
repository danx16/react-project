import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';

const App = () => {
    // Getting users physical location
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (error) => console.log(error)
    );

    return (
        <div>
            <HemisphereDisplay />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
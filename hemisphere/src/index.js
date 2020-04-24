import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';

// CLASS-BASED COMPONENT
// Refactor App Component

class App extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = { latitude: 25}

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude })
                this.state.latitude = position.coords.latitude
            },
            (error) => console.log(error)
        );
    }

    render() { // render - needs for every single component
        return (
            <div>
               { this.state.latitude }
            </div>
        )
    };
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
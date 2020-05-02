import React from 'react';
import ReactDOM from 'react-dom';
// import HemisphereDisplay from './HemisphereDisplay';

// CLASS-BASED COMPONENT
// Refactor App Component

class App extends React.Component {

    state = {latitude: null, errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude})
            },
        (error) => {
             this.setState({ errorMessage: error.message })
        }
    );
    }


    /* ComponentDidmount and ComponentDidUpdate */

    // componentDidMount() {
    //     console.log('componentDidMount')
    // }
    // componentDidUpdate() {
    //     console.log('componentDidUpdate')
    // }

    render(){
        if (!this.state.errorMessage && this.state.latitude) {
            return(
                <div> { this.state.latitude } </div>
            )
        }
        if (this.state.errorMessage && !this.state.latitude) {
            return(
                <div> { this.state.errorMessage } </div>
            )
        }
        else {
            return(
                <div> Loading... </div>
            )
        }
    }

}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
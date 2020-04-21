import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';

const App = () => {
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
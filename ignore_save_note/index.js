import React from 'react';
import ReactDOM from 'react-dom';

// Components
const App = () => { // const App = function()
    return(
        <div>Hi, this is dan!</div>
    )
}

// JSX 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

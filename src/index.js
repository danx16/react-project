import React from 'react';
import ReactDOM from 'react-dom';

// Components

// Reason why they use "className" instead of "class" is to avoid collisions
// class App extends React.Component
// className="label"

const App = () => { // const App = function()
    return(
        <div>
            <label for="name" class="label">Enter email</label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'red', color:'white'}}>Submit</button>
        </div>
    )
}

// JSX 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

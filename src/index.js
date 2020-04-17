import React from 'react';
import ReactDOM from 'react-dom';

// Components

// Reason why they use "className" instead of "class" is to avoid collisions
// Example of "className" vs "class"
// class App extends React.Component
// className="label"

// function clickMe() {
//     return 'Hi there!';
// }

const App = () => { // const App = function()
const buttonText = ['Hello',' ','world'];
// const style = {backgroundColor:'red', color:'white'} SAME

    return(
        <div>
            <label htmlFor="name" className="label">Enter email</label>
            <input id="name" type="text" />

            {/* <button style={style}> Submit </button> */}

            <button style={{backgroundColor:'black', color:'white'}}>
                {buttonText}
            </button>
        </div>
    )
}

// JSX 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)



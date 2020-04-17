import React from 'react';
import ReactDOM from 'react-dom';

// Components

// Reason why they use "className" instead of "class" is to avoid collisions
// class App extends React.Component
// className="label"

// function clickMe() {
//     return 'Hi there!';
// }

const App = () => { // const App = function()
// const buttonText = ['hello',' ','world'];
const style = {backgroundColor:'red', color:'white'}

    return(
        <div>
            <label for="name" class="label">Enter email</label>
            <input id="name" type="text" />
            <button style={style}>
                {/* { buttonText } */}
                Submit
                </button>
            </div>
    )
}

// JSX 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

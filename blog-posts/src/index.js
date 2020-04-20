import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';

const App = () => {
    return (
        <div>
            <SingleComment name='user' />
            <SingleComment name='sample' />
            <SingleComment name='name' />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

// NOTE: 
// JSX Tag
// { } = referring the JS variables
// < > = referring the JS component

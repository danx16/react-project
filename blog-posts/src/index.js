import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
const buttonText = 'Sample';
    return(
        <div className='ui comments'>
            {/* comment */}
            <div className='comment'>
                <a href='/' className='avatar'>
                    <img alt='profile picture'></img>
                </a>
            </div>
            {/* content */}
            <div className='content'>
                <a href='/' className='author'>
                    Sarah
                </a>
            </div>
            {/* metadata */}
            <div className='metadata'>
                Today at 10:00PM
            </div>
            {/* text */}
            <div className='text'>
                It's amazing
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

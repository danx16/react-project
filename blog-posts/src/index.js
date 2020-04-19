import React from 'react';
import ReactDOM from 'react-dom';
import UserPic from'./img/user1.png'; /* Import image*/

// {} = JSX Interpolation

const App = () => {
    return(
        <div className='ui comments'>
            <div className='comment'>
                <a href='/' className='avatar'>
                    <img src={UserPic} alt='User pic' />
                </a>
            </div>
            <div className='content'>
                <a href='/' className='author'>
                    User
                </a>
            </div>
            <div className='metadata'>
                <span className='date'>
                    Today at 10:00PM
                </span>
            </div>
            <div className='text'>
                It's amazing
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

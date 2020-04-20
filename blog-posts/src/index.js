import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import UserPic1 from './img/user1.png';
import UserPic2 from './img/user2.png';
import UserPic3 from './img/user3.png';

const App = () => {
    return (
        <div>
            <SingleComment 
                name='User'
                date='Today at 1:00AM'
                text='It is Monday'
                picture={UserPic1}
            />
            <SingleComment 
                name='Sample'
                date='Today at 11:00AM' 
                text='It is Wednesday' 
                picture={UserPic2}
            />
            <SingleComment 
                name='Name' 
                date='Today at 6:00AM'
                text='It is Saturday' 
                picture={UserPic3}
            />
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

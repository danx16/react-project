import React from 'react';
import UserPic from './img/user1.png';

const SingleComment = (props) => {
console.log(props.name);
    return (
        <div className='comment'>
            <a href='/' className='avatar'>
                <img src={UserPic} alt='User pic' />
            </a>

            <div className='content'>
                <a href='/' className='author'>
                    { props.name }
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
export default SingleComment;
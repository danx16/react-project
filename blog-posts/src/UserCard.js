import React from 'react';

const UserCard = (props) => {
    return (
        <div className='ui card'>
            <div className='content'>
                <div className='header'>Dan Company</div>
                <div className='description'>
                    { props.children }
                </div>
                </div>
                <div className='ui bottom button'>
                    <i className='add icon'></i>
                    Add Friend
                </div>
        </div>
        /*
            header
            description
            new div  buttom button
            i add icon
        */
    )
}

export default UserCard;
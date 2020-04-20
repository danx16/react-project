import React from 'react';

const UserCard = () => {
    return (
        <div className='ui card'>
            <div className='content'>
                <div className='header'>Dan Company</div>
                <div className='description'>
                    Hi I'm Dan Company. I lived at Manila. It's nice to see you!
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
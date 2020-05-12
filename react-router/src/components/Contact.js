import React from 'react';

const Contact = (props) => {
    setTimeout( () => {
        props.history.push('/about') 
    }, 2000)
    return(
        <div className='ui raised very padded text container segment'
        style={{marginTop:'80px'}}
        >
            <h3 className='ui header'>Contact</h3>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
        </div>
    )
}

export default Contact;
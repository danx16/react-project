import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return(
        <div>
            <div className='ui raised very padded text container segment'style={{marginTop:'80px'}}>
                <Link to='/sample' className='ui header'>Sample</Link>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
            </div>
            <div className='ui raised very padded text container segment'style={{marginTop:'80px'}}>
                <Link to='/dan' className='ui header'>Dan</Link>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
            </div>
        </div>

    )
}

export default Contact;
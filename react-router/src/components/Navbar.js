import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';


const Navbar = (props) => {
    setTimeout(() => {
        props.history.push('./about')
    }, 5000);
    return(
        <nav className='ui raised very padded segment'>
            <a className='ui teal inverted segment' href="/">Sample</a>
            <div className='ui right float header'>
                 <button className='ui button'><NavLink to='/'>Home</NavLink></button>
                 <button className='ui button'><Link to='/about'>About</Link></button>
                 <button className='ui button'><Link to='/contact'>Contact</Link></button>
            </div>
        </nav>
    )
}

// Higher order component is withRouter()
// And It's applying these properties to the props
export default withRouter(Navbar);
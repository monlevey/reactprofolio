import React from 'react';
import { Link } from 'react-router-dom';
import '../components/css/navbar.css';
export default function Navbar() {
    return (
        <ul className='navbar'>
         <img
          src={require(`../components/images/monleveylogo.png`)}
          alt="Mon Levey Logo" className="headlogo desktoponly"/>
        <li className='navbar'>
          <span></span>
          <Link to='/portfolio' className='nav-link'>
            Portfolio
         </Link>
         <span></span>
          <Link to='/' className='nav-link'>
            About Me
         </Link>
         <span></span>
          <Link to='/resume' className='nav-link'>
            Resume
         </Link>
         <span></span>
          <Link to='/contact' className='nav-link'>
             Contact
          </Link>
        </li>
      
    </ul>
  )
}







import React from 'react';
import './navlink.css';

const NavLink = (props) => {
  return (
    <div className='navlink'>
      <a onClick={() => props.isMobile && props.closeMobileMenu()}href='/'>About Us</a>
      <a onClick={() => props.isMobile && props.closeMobileMenu()}href='/login'>Log In</a>
      <a onClick={() => props.isMobile && props.closeMobileMenu()}href='/sign_up'>Sign Up</a>
      <a onClick={() => props.isMobile && props.closeMobileMenu()}href='/#contact'>Contact</a>
    </div>
  )
}

export default NavLink;

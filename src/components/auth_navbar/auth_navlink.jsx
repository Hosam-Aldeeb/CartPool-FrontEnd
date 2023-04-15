import React from 'react';
import './auth_navlink.css';
import { logoutUser } from '../../controllers/auth_controller';

const AuthNavLink = (props) => {
  return (
    <div className='navlink'>
      <a onClick={() => props.isMobile && props.closeMobileMenu()}href='/shopper'>Order Groceries</a>
      <a onClick={() => props.isMobile && props.closeMobileMenu()}href='/orders'>Orders</a>
      <a onClick={() => props.isMobile && props.closeMobileMenu()}href='/'>
        <button onClick={logoutUser}>Logout</button>
      </a>
    </div>
  )
}

export default AuthNavLink;

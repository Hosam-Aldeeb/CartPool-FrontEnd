import React, { useState } from 'react';
import './navbar.css';
import Logo from'../../assets/cartpool.png';
import { GiHamburgerMenu } from'react-icons/gi';
import NavLink from './navlink';

const Navbar = () => {
  const [open,setOpen]=useState(false);
  const closeMobileMenu= () => setOpen(false);

    return (
        <nav>
            <div className='leftnav'>
                <div className="logo">
                <img src={Logo} alt='CartPool logo'/>
                </div>
            <a className='name' href='/'>
                CartPool
            </a>  
            </div>
            <div className='rightnav'>
                <a href='/'>About Us</a>
                <a href='/login'>Log In</a>
                <a href='/sign_up'>Sign Up</a>
                <a href='/#contact'>Contact</a>
            </div>
            <div className='hamburger'>
                <button className='hamburgericon'>
                <GiHamburgerMenu size='45px' onClick={()=> setOpen(!open)}/>
                    {open && <NavLink isMobile={true} closeMobileMenu={closeMobileMenu}/>}
                </button>
            </div>
        </nav>
  )
}

export default Navbar;

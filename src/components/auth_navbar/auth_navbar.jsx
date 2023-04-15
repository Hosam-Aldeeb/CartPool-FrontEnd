import React, { useState } from 'react';
import './auth_navbar.css';
import Logo from '../../assets/cartpool.png';
import { GiHamburgerMenu } from'react-icons/gi';
import AuthNavLink from './auth_navlink';
import { logoutUser } from '../../controllers/auth_controller';
import { Button } from '@mui/material';

const AuthNavbar = () => {
    const [open, setOpen] = useState(false);
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
                <a href='/shopper'>Order Groceries</a>
                <a href='/orders'>Orders</a>
                <a href='/'><Button variant="outlined" onClick={logoutUser}>Logout</Button></a>
            </div>
            <div className='hamburger'>
                <button className='hamburgericon'>
                    <GiHamburgerMenu size='45px' onClick={()=> setOpen(!open)}/>
                        {open && <AuthNavLink isMobile={true} closeMobileMenu={closeMobileMenu} />}
                </button>
            </div>
        </nav>
    )
}

export default AuthNavbar;

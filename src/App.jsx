import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthNavbar from './components/auth_navbar/auth_navbar';
import Navbar from './components/navbar/navbar';
import Login from './components/login/login';
import SignUp from './components/sign_up/sign_up';
import LandingPage from './components/landing_page/landing_page';
import Orders from './components/orders/orders';
import RemoteShopper from './components/remote_shopper/remote_shopper';
import Profile from './components/profile/profile';

const App = () => {

    if(!localStorage.getItem('cartpool_token')) {
        return (
            <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sign_up" element={<SignUp />} />
                <Route path = "/" element={<LandingPage />} />
                </Routes>
            </BrowserRouter>
            </>
        )
    }

    return (
        <>
        <AuthNavbar />
        <BrowserRouter>
        <Routes>
            <Route path="/orders" element={<Orders />} />
            <Route path="/shopper" element={<RemoteShopper />} />
            <Route path="/profile" element={<Profile />} />
            <Route path = "/" element={<LandingPage />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;

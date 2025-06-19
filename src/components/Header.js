import React from 'react'
import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';

const Header = () => {
    const [btnNameLogin, setBtnNameLogin] = useState("Login");

    const handleLogin = () => {
        btnNameLogin === 'Login' ? setBtnNameLogin('Logout') : setBtnNameLogin('Login');
    }
    
    return (
        <header>
            <div className="logo">
                <img src={LOGO_URL} alt="Logo" />
            </div>
            <nav className='nav-items'>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#cart">Cart</a></li>
                    <button className='login-btn' onClick={handleLogin}>{btnNameLogin}</button>
                </ul>
            </nav>
        </header>
    );
}

export default Header

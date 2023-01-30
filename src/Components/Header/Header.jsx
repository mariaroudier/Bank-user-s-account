import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './argentBankLogo.png'
import './header.css'


function Header() {
      return (
            <nav className="main-nav">
                  <NavLink to="/" className='main-nav-logo'>
                        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                        <h1 className="sr-only">Argent Bank</h1>
                  </NavLink>
                  <NavLink to="/login" className='main-nav-item'>
                        <i className="fa fa-user-circle"></i>
                        <span className='nav-text'>Sign In</span>
                  </NavLink>
            </nav>
      )

}

export default Header;
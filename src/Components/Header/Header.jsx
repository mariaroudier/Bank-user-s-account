import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './argentBankLogo.png'
import './header.css'


function Header({firstName}) {
      return (
            <nav className="main-nav">
                  <NavLink to="/" className='main-nav-logo'>
                        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                        <h1 className="sr-only">Argent Bank</h1>
                  </NavLink>
                  {
                        window.location.pathname === '/profil' ? 
                        (     <div>
                                    <NavLink to="/profil" className='main-nav-item'>
                                          <i className="fa fa-user-circle"></i>
                                          Tony
                                    </NavLink>
                                    <NavLink to="/" className='main-nav-item'>
                                          <i className="fa fa-sign-out"></i>
                                          Sign Out
                                    </NavLink>
                              </div> 
                        )     :
                        (     <NavLink to="/login" className='main-nav-item'>
                                          <i className="fa fa-user-circle"></i>
                                          <span className='nav-text'>Sign In</span>
                              </NavLink> 
                        )
                  }
            </nav>
      )
}

export default Header;
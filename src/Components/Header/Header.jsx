import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getToken } from "../../redux/token";
import { loginFetch } from "../../service/API";
import { getFirstName } from "../../redux/firstNameReducer";
import { NavLink } from 'react-router-dom';
import logo from './argentBankLogo.png'
import './header.css'


function Header() {
      const firstName = useSelector((state) => state.firstName.value);
      const token = useSelector((state) => state.token.value);


  
      // Use Effect
      const dispatch = useDispatch();
      useEffect(() => {
            if(token === localStorage.getItem("token")) {

                  dispatch(getToken(localStorage.getItem("token")));
                  const user = loginFetch(token);
                  user.then(obj => {
                        dispatch(getFirstName(obj.firstName));
                  });
            }

      });

      return (
            <nav className="main-nav">
                  <NavLink to="/" className='main-nav-logo'>
                        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"/>
                        <h1 className="sr-only">Argent Bank</h1>
                  </NavLink>
                  {
                        token !== 0 ? 

                        (     <div>
                                    <NavLink to="/profil" className='main-nav-item'>
                                          <i className="fa fa-user-circle"></i>
                                          {firstName}
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
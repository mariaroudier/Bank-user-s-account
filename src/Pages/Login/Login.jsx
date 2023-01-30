import React, { useEffect, useState } from 'react';
import './login.css';
import { Navigate } from 'react-router-dom';


function Login() {

      // State
      let [loginErreur, setLoginErreur] = useState("");
      let [loginStatus, setLoginStatus] = useState(0);

      let [email, setEmail] = useState("");
      let [password, setPassword] = useState("");
      let [remember, setRememberMe] = useState(false);


      const handleSubmit = (event) => {
            event.preventDefault();
            console.log('submited')
            
      }


      return (

            <main className='main bg-dark'>
                 <section className="sign-in-content">
                        <i className="fa fa-user-circle sign-in-icon"></i>
                        <h1>Sign In</h1>
                        <form name="sign-in" onSubmit={handleSubmit}>
                              <div className="input-wrapper">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" id="username" />
                              </div>
                              <div className="input-wrapper">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" />
                              </div>
                              <div className="input-remember">
                                    <input type="checkbox" name="remember-me" />
                                    <label htmlFor="remember-me">Remember me</label>
                              </div>
                              <div>
                                    {/* {loginErreur} */}
                              </div>
                              <button className="sign-in-button" type="submit">Sign In</button>
                        </form>
                  </section> 
            </main>
      )
      
      

}

export default Login;
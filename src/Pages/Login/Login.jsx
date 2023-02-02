import React, { useEffect, useState } from 'react';
import './login.css';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getLogin } from "../../service/API";
import { getToken } from "../../redux/token";


function Login() {

      // State
      let [loginErreur, setLoginErreur] = useState("");
      let [loginStatus, setLoginStatus] = useState(0);
      let [email, setEmail] = useState("");
      let [password, setPassword] = useState("");
      let [remember, setRememberMe] = useState(false);

      const token = useSelector((state) => state.token.value);
      useEffect(() => {
            if(token === localStorage.getItem("token")) {
                  addToken(localStorage.getItem("token"));
            }
      });

      const handleSubmit = (e) => {
            e.preventDefault();

            const login = getLogin({"email": email, "password": password});
            login.then(obj => {
                  if(obj.status !== 400) {
                        setLoginStatus(obj.status);
                        addToken(obj.token);
                  } else {
                        setLoginErreur(obj.message);
                  }
            });
      }

      // token
      const dispatch = useDispatch();
      const addToken = (token) => {
          if(remember === true) {
            localStorage.setItem("token", JSON.stringify(token));
          }
          dispatch(getToken(token));
          console.log(token)
      }

      if(token !== 0 || loginStatus === 200 || token === localStorage.getItem("token")){
            console.log(token)
            return <Navigate to="/profil" /> 
      }
      
      return (

            <main className='main bg-dark'>
                 <section className="sign-in-content">
                        <i className="fa fa-user-circle sign-in-icon"></i>
                        <h1>Sign In</h1>
                        <form name="sign-in" onSubmit={handleSubmit}>
                              <div className="input-wrapper">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" id="username" onChange={e => setEmail(e.target.value)} />
                              </div>
                              <div className="input-wrapper">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
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
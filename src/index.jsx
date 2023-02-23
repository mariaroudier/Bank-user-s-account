import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login'
import Logout from './Pages/Logout/Logout'
import Profil from './Pages/Profil/Profil';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </Provider>
  </BrowserRouter>,
);

reportWebVitals();

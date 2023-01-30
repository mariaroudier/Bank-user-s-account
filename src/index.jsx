import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login'
import Profil from './Pages/Profil/Profil';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profil" element={<Profil />} />
      {/* <Route path="/logout" element={<Logout />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    <Footer />
  </BrowserRouter>,
);

reportWebVitals();

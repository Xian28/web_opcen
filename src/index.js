import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" exact element = {<App />} >
        <Route index element = {<LandingPage />} />
        <Route path = "home" element = {<Home />}>
          
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users/Users';
import IncidentReport from './pages/IncidentReport/IncidentReport';

const root = ReactDOM.createRoot(document.getElementById('root'));

var token = 'login'

root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" exact element = {<App />} >
        {/* <Route index element = {<LandingPage />} /> */}
        <Route path = "/" exact element = {token == 'login' ? <Home /> : <LandingPage />} >
          <Route index element = {<Dashboard />} />
          {/* <Route path = "dashboard" element = {<Dashboard />} /> */}
          <Route path = "users" element = {<Users />} />
          <Route path = "incident_reports" element = {<IncidentReport />} />
        </Route>
        <Route path = "*" element = {<Error />}/>
        <Route path = "not-found" element = {<Error />}/>
        {/* <Route path = "home" element = {<Home />}>
          <Route index element = {<Dashboard />} />
          <Route path = "dashboard" element = {<Dashboard />} />
          <Route path = "users" element = {<Users />} />
          <Route path = "incident_reports" element = {<IncidentReport />} />
          <Route path = "*" element = {<Error />}/>
          <Route path = "not-found" element = {<Error />}/>
        </Route> */}
      </Route>
    </Routes>
  </BrowserRouter>
);

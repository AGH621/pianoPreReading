import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './index.css';

import TopNavBar from './App';
import Home from './Home';
import About from './About';
import ThreeNote from './3-Note';


import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <TopNavBar />
        <Link to="/About">About</Link>
        <Link to="/3-Note">Three-Note</Link>
    
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/3-Note">
            <ThreeNote />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
);





/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopNavBar />
    <Home />
    <ThreeNote />
    
  </React.StrictMode>
);*/




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

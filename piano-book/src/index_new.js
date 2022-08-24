/*
Piano PreReading Book - Routing
Created by: Anne Hamill
Created on: 23 August 2022
*/

/*
//Imports for React
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from "react-router-dom";

//Imports for our app
import App from "./App";
import Home from "./routes/home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="home" element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>

);*/

import React from 'react';
import reportWebVitals from './reportWebVitals';


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

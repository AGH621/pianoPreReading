/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/




//Imports for React
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as RrdBrowserRouter, Routes as RrdRoutes, Route as RrdRoute} from "react-router-dom";

//Imports for our app
import App from "./App";
import Home from "./routes/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RrdBrowserRouter>
        <RrdRoutes>
          <RrdRoute path="/" element={<App />}>
            <RrdRoute index element={<Home />} />
            

            <RrdRoute path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>404: This ain&#39;t gonna work. Sorry &#39;bout that.</p>
                </main>
              }
            />
          </RrdRoute>
        </RrdRoutes>
    </RrdBrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { Outlet, Link } from "react-router-dom";

import "./css/css_reset.css";
import "./css/nav_style.css";
import "./css/text_style.css";

export default function App() {
    return (
        <nav className="top">
            <h1 className="logo"><Link className="top-nav" to="/">PreReading <br /> Piano Book</Link></h1>
                <div className="text">
                    <ul>
                        <li className="top-nav"><Link className="pg-link" to="/three_note">3 Note</Link></li> 
                        <li className="top-nav"><Link className="pg-link" to="/four_note">4 Note</Link></li> 
                        <li className="top-nav"><p className="pg-link">Pentatonic</p></li>
                        <li className="top-nav"><p className="pg-link">Diatonic</p></li>
                        <li className="top-nav"><p className="pg-link">Song List</p></li>
                        <li className="top-nav"><p className="pg-link">Usage</p></li>
                    </ul>
                </div>
            <Outlet />        
        </nav>
    );
}






/*
function TopNavBar() {
    return (
        <nav className="top">
            <h1><a class="logo" href="../../index.html">PreReading <br /> Piano Book</a></h1>
            
            <div className="text">
                <ul>
                    <li class="top-nav"><a class="pg-link" href="html/text/3_note.html">3 Note</a></li>
                    <li class="top-nav"><a class="pg-link" href="html/text/4_note.html">4 Note</a></li>
                    <li class="top-nav"><a class="pg-link" href="html/text/diatonic.html">Diatonic</a></li>
                    <li class="top-nav"><a class="pg-link" href="html/text/pentatonic.html">Pentatonic</a></li>
                    <li class="top-nav"><a class="pg-link" href="html/text/song_list.html">Song List</a></li>
                    <li class="top-nav"><a class="pg-link" href="html/text/usage.html">Usage</a></li>
                </ul>

                <ul className="meter">
                    <li class="pg-nav first"><a class="dp-link" href="#3-note-duple">Duple Meter</a></li>
                    <li class="pg-nav first"><a class="dp-link" href="#3-note-triple">Triple Meter</a></li>
                </ul>
            </div>
        
        </nav>
    );
}


export default TopNavBar;*/



/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


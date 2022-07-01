import React from 'react';
import './css/nav_style.css';
import './css/text_style.css';
import './images/icons8-piano-20b.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/*
import Home from './Home';
import About from './About';
import ThreeNote from './3-Note';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/3-Note">3-Note</Link>
            </li>
          </ul>
        </nav>

        {A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. }
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
      </div>
    </Router>
  );
}*/





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


export default TopNavBar;


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


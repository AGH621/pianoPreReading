import React from 'react';
import { Outlet, Link } from "react-router-dom";

import "./css/css_reset.css";
import "./css/nav_style.css";
import "./css/text_style.css";

import ThreeNote from "./routes/three_note";
import FourNote from "./routes/four_note";
import Home from "./routes/home";
import Usage from "./routes/usage";
import SongList from "./routes/song_list";
import Pentatonic from "./routes/pentatonic";
import Diatonic from "./routes/diatonic";

export default function App() {
    return (
        <div>
        <nav className="top">
            <h1 className="logo"><Link className="top-nav" to="/">PreReading <br /> Piano Book</Link></h1>
                <div className="text">
                    <ul>
                        <li className="top-nav"><Link className="pg-link" to="/three_note">3 Note</Link></li> 
                        <li className="top-nav"><Link className="pg-link" to="/four_note">4 Note</Link></li> 
                        <li className="top-nav"><Link className="pg-link" to="/pentatonic">Pentatonic</Link></li>
                        <li className="top-nav"><Link className="pg-link" to="/diatonic">Diatonic</Link></li>
                        <li className="top-nav"><Link className="pg-link" to="/song_list">Song List</Link></li>
                        <li className="top-nav"><Link className="pg-link" to="/usage">Usage</Link></li>
                    </ul>
                </div>       
        </nav>
        <Outlet />
        </div>
    );
}




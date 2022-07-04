import React from 'react';
import { Outlet, Link } from "react-router-dom";

import "./css/css_reset.css";
import "./css/nav_style.css";
import "./css/text_style.css";

import ThreeNote from "./routes/three_note";
import FourNote from "./routes/four_note";

export default function App() {
    return (
        <div>
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
        </nav>
        <Outlet />
        </div>
    );
}




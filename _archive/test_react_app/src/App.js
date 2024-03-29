import React from 'react';
import { Outlet, Link } from "react-router-dom";

import "./css/css_reset.css";
import "./css/nav_style.css";
import "./css/text_style.css";
import "./css/note_style.css";


export default function App() {
    return (
        <div>
        <nav className="top">
            <h1><Link className="logo" to="/">PreReading <br /> Piano Book</Link></h1>
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

/*
export function Footer() {
    return (
        <footer>
            <nav class="bottom">
                <p class="copyright">Copyright MMXXII &#169; Anne G. Hamill</p>
                <ul>
                    <li class="extras"><a class="pg-link" href="html/text/about.html">About</a></li>
                    <li class="extras"><a class="pg-link" href="#">Ta-ka-di-mi</a></li>
                </ul>    
            </nav>
        </footer>
    )
}*/



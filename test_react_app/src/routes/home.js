import React from 'react';
import { Link, Outlet } from "react-router-dom";

import "../css/css_reset.css";
import "../css/text_style.css";
import "../css/nav_style.css";
import "../css/note_style.css";

import Usage from "./usage";

export default function Home() {
    return (
        <main>
            <section class="home">
            <h1 class="title">PreReading Piano Book</h1>
            <p class="intro">This is a set of folksongs designed for students who are not yet reading standard notation.  They can be used to:</p>
        
            <ul class="two-indent">
                <li class="bullets">Learn authentic folksongs.</li>
                <li class="bullets">Learn to play melodies with hands together.</li>
                <li class="bullets">Learn to play songs with chordal accompaniment.</li>
            </ul>
        
            <p class="intro">More information about how you can use these songs in your studio <Link className="in-link" to={`/Usage`}>can be found here</Link></p>
        
            <p class="intro">To get started, select a song from one of the menus at the top of the page.</p>  
        
            </section>
            <Outlet />
        </main>
    );
}    
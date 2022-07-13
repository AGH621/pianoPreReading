import React from 'react';
import { Link, Outlet } from "react-router-dom";

import "../css/css_reset.css";
import "../css/text_style.css";
import "../css/nav_style.css";
import "../css/note_style.css";

import Footer from "./footer";


export default function Diatonic() {
    return (
        <main>
            <div>
            <section className="home">
            <h1 className="title">Diatonic</h1>
            <p className="intro">This page is under construction. Come back soon!</p>
    
            <h2 className="graph-head">Melodic Features</h2>
            <p className="intro">[placeholder]</p>
    
            <h2 className="graph-head">Harmonic Features</h2>
            <p className="intro">[placeholder]</p>
            </section>
            </div>
            <Footer />
        </main>
    );
}            
            
            
            
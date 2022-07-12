import React from 'react';
import { Link, Outlet } from "react-router-dom";

import "../css/css_reset.css";
import "../css/text_style.css";
import "../css/nav_style.css";
import "../css/note_style.css";

import { fourNoteTitles } from "../data/song_builder"

import FullWhtI from "../images/full_wht_tonic.png";
import FullWhtV7 from "../images/full_wht_dom.png";
import FullBlkI from "../images/full_blk_tonic.png";
import FullBlkV7 from "../images/full_blk_dom.png";


export default function FourNote() {
    let songs = fourNoteTitles();
    
    return (
    <main className="columns">
        <nav className="songs">
            {songs.map((song) => (
                <Link to={`/${song}`}>
            {song}
          </Link>
        ))}
        <Outlet />      
        </nav>

        <section class="home">
            <h1 class="title">4 Note Songs</h1>
            <p class="intro">These songs add the fifth note of the major scale (sol) to those learned in the 3 note songs.</p>
        
            <h2 class="graph-head">Melodic Features</h2>
            <p class="intro">All of these songs are in major, but can easily be changed to minor by instructing the student to play the third note one           half step lower. There are equal numbers of songs in duple and triple meters. They are notated using 1-octave, color-coded keyboard                  diagrams.</p>
        
            <h2 class="graph-head">Harmonic Features</h2>
            <p class="intro">These songs use only the tonic (I) and dominant-seventh (V7) chords.  If your student learned the 3 note songs first, they          should be ready to play the full tonic chord, and a three note (third-seventh-root) dominant-seventh.</p>
        
            <sidebar class="chords">
                <div class="tonic">
                    <p class="chord">I
                    <br />
                    <img class="pitch" src={FullWhtI} />
                    <br />
                    white key tonic
                    </p>
                </div>
        
                <div class="note">
                    <p class="dominant">V7
                    <br />
                    <img class="pitch" src={FullWhtV7} />
                    <br />
                    white key dominant
                    </p>
                </div>	
        
                <div class="note">
                    <p class="tonic">I
                    <br />
                    <img class="pitch" src={FullBlkI} />
                    <br />
                    black key tonic
                    </p>
                </div>
        
                <div class="note">
                    <p class="dominant">V7
                    <br />
                    <img class="pitch" src={FullBlkV7} />
                    <br />
                    black key dominant
                    </p>
                </div>
            </sidebar>            
        </section>
    </main>
    );
}
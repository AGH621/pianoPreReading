import React from 'react';
import { Link, Outlet } from "react-router-dom";

import "../css/css_reset.css";
import "../css/text_style.css";
import "../css/nav_style.css";
import "../css/note_style.css";

import { threeNoteTitles } from "../data/song_builder";

import SimpleWhtI from "../images/simple_wht_tonic.png";
import SimpleWhtV7 from "../images/simple_wht_dom.png";
import SimpleBlkI from "../images/simple_blk_tonic.png";
import SimpleBlkV7 from "../images/simple_blk_dom.png";



export default function ThreeNote() {
    /*
    Render the 3-Note Song page.  Use the songs returned by threeNoteTitles in the left hand navigation column.
    TODO: The left-hand navigation styles do not render correctly when moved to a CSS style sheet.
    */
    
    let songs = threeNoteTitles();
    
    return (
    <main className="columns">
        <nav className="songs">
            <h3 className="song-nav">Titles</h3>
            {songs.map((song) => (
                <Link className="song-title" to={`/${song}`} key={song}>
            {song}
          </Link>
        ))}
        <Outlet />      
        </nav>
        
        <section class="home">
            <h1 class="title">3-Note Songs</h1>
            <p class="intro">These songs use only the first 3 notes of the major scale (do, re and mi), which are much more common in United States folk         music than the mi-sol-la combination favored by music teachers trained in traditional Kodaly methods (which are based on Hungarian folk               music). I find that do-re-mi songs have a wider range of character than mi-sol-la songs which sound all the same.</p>
        
            <h2 class="graph-head">Melodic Features</h2>
            <p class="intro">All of these songs are in major, but can easily be changed to minor by instructing the student to play the third (highest)          note one half step lower. There are equal numbers of songs in duple and triple meters. They are notated using 1-octave, color-coded keyboard         diagrams.</p>
        
            <h2 class="graph-head">Harmonic Features</h2>
            <p class="intro">These songs use only the tonic (I) and dominant-seventh (V7) chords.  For young students with small hands and less fine             motor control, start by teaching, a stripped down, two-note version of each chord. I use a fifth (root + fifth) for the tonic                        chord, and a major second (seventh + root) for the dominant-seventh.</p>
            <sidebar class="chords">
                <div class="chords">
                    <p>I
                    <br />
                    <img class="pitch" src={SimpleWhtI} />
                    <br />
                    white key tonic
                    </p>
                </div>
        
                <div class="chords">
                    <p>V7
                    <br />
                    <img class="pitch" src={SimpleWhtV7} />
                    <br />
                    white key dominant
                    </p>
                </div>	
        
                <div class="chords">
                    <p>I
                    <br />
                    <img class="pitch" src={SimpleBlkI} />
                    <br />
                    black key tonic
                    </p>
                </div>
        
                <div class="chords">
                    <p>V7
                    <br />
                    <img class="pitch" src={SimpleBlkV7} />
                    <br />
                    black key dominant
                    </p>
                </div>
            </sidebar>    
        </section>
    </main>
    );
}
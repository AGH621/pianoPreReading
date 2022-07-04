import React from 'react';
import { Link, Outlet } from "react-router-dom";

import "../css/css_reset.css";
import "../css/text_style.css";
import "../css/nav_style.css";
import "../css/note_style.css";


export default function ThreeNote() {
    return (
    <main>
        <section class="home">
        <h1 class="title">3 Note Songs</h1>
        <p class="intro">These songs use only the first 3 notes of the major scale (do, re and mi), which are much more common in United States folk         music than the mi-sol-la combination favored by music teachers trained in traditional Kodaly methods (which are based on Hungarian folk               music). I find that do-re-mi songs have a wider range of character than mi-sol-la songs which sound all the same.</p>
        
        <h2 class="graph-head">Melodic Features</h2>
        <p class="intro">All of these songs are in major, but can easily be changed to minor by instructing the student to play the third (highest)          note one half step lower. There are equal numbers of songs in duple and triple meters. They are notated using 1-octave, color-coded keyboard         diagrams.</p>
        
        <h2 class="graph-head">Harmonic Features</h2>
        <p class="intro">These songs use only the tonic (I) and dominant-seventh (V7) chords.  For young students with small hands and less fine             motor control, start by teaching, a stripped down, two-note version of each chord. I use a fifth (root + fifth) for the tonic                        chord, and a major second (seventh + root) for the dominant-seventh.</p>
        </section>
        
        <section class="chords">
        <div class="note">
            <p class="chord-lyric">I
            <br />
            <img class="pitch" src="../../images/pngs/simple_wht_tonic.png" />
            <br />
            white key tonic
            </p>
        </div>
        
        <div class="note">
            <p class="chord-lyric">V7
            <br />
            <img class="pitch" src="../../images/pngs/simple_wht_dom.png" />
            <br />
            white key dominant
            </p>
        </div>	
        
        <div class="note">
            <p class="chord-lyric">I
            <br />
            <img class="pitch" src="../../images/pngs/simple_blk_tonic.png" />
            <br />
            black key tonic
            </p>
        </div>
        
        <div class="note">
            <p class="chord-lyric">V7
            <br />
            <img class="pitch" src="../../images/pngs/simple_blk_dom.png" />
            <br />
            black key dominant
            </p>
        </div>
        </section>
        
        <br />
        
        <h2 class="graph-head home" name="3-note-duple" id="3-note-duple">Duple Meter Songs</h2>
        <section class="songs">
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../three-note/au_claire_de_la_lune.html">Au Claire de la Lune</a></h4>
        <a href="../three-note/au_claire_de_la_lune.html"><img class="snippet" src="../../images/pngs/au_claire_de.png" /></a>
        </div>
        
        <div class="preview">
            <h4 class="song-title"><a class="in-link" href="../three-note/babylons_fallin.html">Babylon&#39;s Fallin&#39;</a></h4>
            <a href="../three-note/babylons_fallin.html"><img class="snippet" src="../../images/pngs/babylons_fallin.png" /></a>
        </div>
        
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../three-note/frog_in_the_meadow.html">Frog in the Meadow</a></h4>
        <a href="../three-note/frog_in_the_meadow.html"><img class="snippet" src="../../images/pngs/frog_in_the.png" /></a>
        </div>
        
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../three-note/hot_cross_buns.html">Hot Cross Buns</a></h4>
        <a href="../three-note/hot_cross_buns.html"><img class="snippet" src="../../images/pngs/hot_cross_buns.png" /></a>
        </div>
        
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../three-note/johnny_had_one_friend.html">Johnny Had One Friend</a></h4>
        <a href="../three-note/johnny_had_one_friend.html"><img class="snippet" src="../../images/pngs/johnny_had_one.png" /></a>
        </div>
        
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../three-note/pitter_patter.html">Pitter Patter</a></h4>
        <a href="../three-note/pitter_patter.html"><img class="snippet" src="../../images/pngs/pitter_patter.png" /></a>
        </div>
        </section> 
        
        <h2 class="graph-head home" name="3-note-triple" id="3-note-triple">Triple Meter Songs</h2>
        <section class="songs">
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../three-note/fais_do_do.html">Fais Do Do</a></h4>
        <a href="../three-note/fais_do_do.html"><img class="snippet" src="../../images/pngs/fais_do_do.png" /></a>
        </div>
        
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../three-note/im_a_little_dutch_girl.html">I&#39;m a Little Dutch Girl</a></h4>
        <a href="../three-note/im_a_little_dutch_girl.html"><img class="snippet" src="../../images/pngs/little_dutch_girl.png" /></a>
        </div>
        
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../three-note/mother_may_i_go_out.html">Mother May I Go Out</a></h4>
        <a href="../three-note/mother_may_i_go_out.html"><img class="snippet" src="../../images/pngs/mother_may_i.png" /></a>
        </div>
        
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../three-note/rock_a_bye.html">Rock-A-Bye</a></h4>
        <a href="../three-note/rock_a_bye.html"><img class="snippet" src="../../images/pngs/rock_a_bye.png" /></a>
        </div>
        
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../three-note/sailor_sailor.html">Sailor Sailor</a></h4>
        <a href="../three-note/sailor_sailor.html"><img class="snippet" src="../../images/pngs/sailor_sailor.png" /></a>
        </div>

        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../three-note/there_she_goes.html">There She Goes</a></h4>
        <a href="../three-note/there_she_goes.html"><img class="snippet" src="../../images/pngs/there_she_goes.png" /></a>
        </div> 	
        </section>
        
    </main>
    );
}
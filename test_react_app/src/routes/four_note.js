import React from 'react';
import { Link, Outlet } from "react-router-dom";

import "../css/css_reset.css";
import "../css/text_style.css";
import "../css/nav_style.css";
import "../css/note_style.css";

import { fourNoteTitles } from "../data/song_builder"


export default function FourNote() {
    let songs = fourNoteTitles();
    
    return (
    <main>
        <div style={{ display: "flex" }}>
              <nav
                style={{
                  borderRight: "solid 1px",
                  padding: "1rem",
                }}
              >
                {songs.map((song) => (
                  <Link
                    style={{ display: "block", margin: "1rem 0" }}
                    to={`/songs/${song}`}
            
                  >
                    {song}
                  </Link>
                ))}
              </nav>
            </div>
        
        
        
        
        
        <section class="home">
        <h1 class="title">4 Note Songs</h1>
        <p class="intro">These songs add the fifth note of the major scale (sol) to those learned in the 3 note songs.</p>
        
        <h2 class="graph-head">Melodic Features</h2>
        <p class="intro">All of these songs are in major, but can easily be changed to minor by instructing the student to play the third note one           half step lower. There are equal numbers of songs in duple and triple meters. They are notated using 1-octave, color-coded keyboard                  diagrams.</p>
        
        <h2 class="graph-head">Harmonic Features</h2>
        <p class="intro">These songs use only the tonic (I) and dominant-seventh (V7) chords.  If your student learned the 3 note songs first, they          should be ready to play the full tonic chord, and a three note (third-seventh-root) dominant-seventh.</p>
        </section>
        
        <section class="chords">
        <div class="note">
            <p class="chord-lyric">I
            <br />
            <img class="pitch" src="../../images/pngs/full_wht_tonic.png" />
            <br />
            white key tonic
            </p>
        </div>
        
        <div class="note">
            <p class="chord-lyric">V7
            <br />
            <img class="pitch" src="../../images/pngs/full_wht_dom.png" />
            <br />
            white key dominant
            </p>
        </div>	
        
        <div class="note">
            <p class="chord-lyric">I
            <br />
            <img class="pitch" src="../../images/pngs/full_blk_tonic.png" />
            <br />
            black key tonic
            </p>
        </div>
        
        <div class="note">
            <p class="chord-lyric">V7
            <br />
            <img class="pitch" src="../../images/pngs/full_blk_dom.png" />
            <br />
            black key dominant
            </p>
        </div>
        </section>
        
        <br />
        
        <h2 class="graph-head home" name="4-note-duple" id="4-note-duple">Duple Meter Songs</h2>        
        <section class="songs">
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../four-note/fooba_wooba.html">Fooba Wooba</a></h4>
        <a href="../four-note/fooba_wooba.html"><img class="snippet" src="../../images/pngs/fooba_wooba.png" /></a>
        </div>
        
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../four-note/go_to_sleep.html">Go to Sleep</a></h4>
        <a href="../four-note/go_to_sleep.html"><img class="snippet" src="../../images/pngs/go_to_sleep.png" /></a>
        </div>
        
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../four-note/i_have_a_dog.html">I Have a Dog</a></h4>
        <a href="../four-note/i_have_a_dog.html"><img class="snippet" src="../../images/pngs/i_have_a_dog.png" /></a>
        </div>

        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../four-note/let_us_chase_the_squirrel.html">Let Us Chase the Squirrel</a></h4>
        <a href="../four-note/let_us_chase_the_squirrel.html"><img class="snippet" src="../../images/pngs/let_us_chase.png" /></a>
        </div>
        
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../four-note/old_aunt_dinah.html">Old Aunt Dinah</a></h4>
        <a href="../four-note/old_aunt_dinah.html"><img class="snippet" src="../../images/pngs/old_aunt_dinah.png" /></a>
        </div>
        
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../four-note/old_obidiah.html">Old Obidah</a></h4>
        <a href="../four-note/old_obidiah.html"><img class="snippet" src="../../images/pngs/old_obidiah.png" /></a>
        </div>
        </section>
        
        <h2 class="graph-head home" name="4-note-triple" id="4-note-triple">Triple Meter Songs</h2>
        <section class="songs">
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../four-note/bells_in_the_steeple.html">Bells in the Steeple</a></h4>
        <a href="../four-note/bells_in_the_steeple.html"><img class="snippet" src="../../images/pngs/bells_in_the.png" /></a>
        </div>
        
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../four-note/johnny_works_with_one_hammer.html">Johnny Works with One Hammer</a></h4>
        <a href="../four-note/johnny_works_with_one_hammer.html"><img class="snippet" src="../../images/pngs/johnny_works_with.png" /></a>
        </div>
        
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../four-note/knock_at_the_door.html">Knock at the Door</a></h4>
        <a href="../four-note/knock_at_the_door.html"><img class="snippet" src="../../images/pngs/knock_at_the_door.png" /></a>
        </div>
        
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../four-note/ladybug.html">Ladybug</a></h4>
        <a href="../four-note/ladybug.html"><img class="snippet" src="../../images/pngs/ladybug.png" /></a>
        </div>
        
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../four-note/little_tom_tinker.html">Little Tom Tinker</a></h4>
        <a href="../four-note/little_tom_tinker.html"><img class="snippet" src="../../images/pngs/tom_tinker.png" /></a>
        </div>
        
        <div class="preview">
        <h4 class="song-title"><a class="in-link" href="../four-note/wholl_buy_me_milk_cans.html">Who&#39;ll Buy Me Milk Cans</a></h4>
        <a href="../four-note/wholl_buy_me_milk_cans.html"><img class="snippet" src="../../images/pngs/milk_cans.png" /></a>
        </div> 	
        </section>
    </main>
    );
}
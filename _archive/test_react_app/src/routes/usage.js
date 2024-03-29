import React from 'react';
import { Link, Outlet } from "react-router-dom";

import "../css/css_reset.css";
import "../css/text_style.css";
import "../css/nav_style.css";
import "../css/note_style.css";

import Footer from "./footer";


export default function Usage() {
    return (
        <main>
            <section className="home">
            
                <h1 className="title">Using These Songs</h1>
                <p className="intro">There are many ways to play these songs; use them in a way which makes sense for you and your students. In my studio we use them as solo repertoire while also working through a well-known piano method.</p>
            
                <h2 className="graph-head">Teaching Sequence</h2>
                <p className="intro">I use the following steps to teach the songs.  Feel free to skip steps or add more.  Remember the right way is the way that works for your students.</p>
            
                <h3 className="graph-subhead">Melody</h3>
                <ul className="one-indent"> 
                    <li className="bullets">Play the melody as written with the right hand by itself and the left hand by itself.</li>
                    <li className="bullets">Play the melody as written with both hands at the same time.</li>
                    <li className="bullets">If the melody is written for the white keys, play it on the black keys and vice versa.</li>
                    <li className="bullets">Play the melody with a combination of black and white keys. You establish the combinations</li>
                    <li className="bullets">Play the melody anywhere on the keyboard the student chooses. (This leads to some interesting polytonality!)</li>
                </ul>
                    
                <h3 className="graph-subhead">Chords</h3>
                <ul className="one-indent">
                    <li className="bullets">Learn the chords by themselves with both hands, separately and together.</li>
                    <li className="bullets">Play the melody with the right hand and the chords with the left.</li>
                    <li className="bullets">Play the melody with left hand and the chords with the right.</li>
                </ul>

                <h2 className="graph-head">Unit Concepts</h2>
            
                <h3 className="graph-subhead">3 Note Songs</h3>
                <p className="one-indent">Use only the pitches do, re and mi.  All songs are in the major mode, with an equal split between duple and triple meter.  I let students use any finger they want, as long as each finger plays only one key.</p>

                <h3 className="graph-subhead">4 Note Songs</h3>
                <p className="one-indent">Use the pitches do, re, mi and sol.  All songs are in the major mode, with an equal split between duple and triple meter. I require my students to play with the fingers indicated in each score.</p>

                <h3 className="graph-subhead">Diatonic Songs</h3>
                <p className="one-indent">These are easier to play than the pentatonic songs as they are in 5-finger position without any stretches.  All songs are in the major mode, with an equal split between duple and triple meter. Standard rhythm notation is added, but the notation                 does not have time signatures or bar lines.</p>

                <h3 className="graph-subhead">Penatonic Songs</h3>
                <p className="one-indent">These songs use an extended hand position which skips the note fa. All songs are in the major mode, with an equal split between duple and triple meter. Time signatures and barlines are added to the notation.</p>
            </section>
        
            <section className="home">

                <h2 className="graph-head"> Repertoire Considerations</h2>
            
                <h3 className="graph-subhead">Copyright</h3>
                <p className="one-indent">This collection contains only folksongs due to copyright restrictions. I cannot afford to pay the licensing fees necessary to publish songs outside the public domain. While I have traced the history and background of each song to the best of my                  ability, I am human and therefore make mistakes. If you think I have inadvertently included a copyrighted piece, please <a className="in-link" href="mailto:             saxmusicology@gmail.com">contact me!</a></p>
            
                <h3 className="graph-subhead">Subject Matter</h3>
                <p className="one-indent">As folksongs from earlier times, there may be lyrics which do not fit some people&#39;s sensibilities and sensitivities. You are welcome to skip the songs which you do not like, that is your perogative. However, as a deep believer in                      diversity of thought, I will not remove songs from this site unless there is a verifiable copyright claim.</p>
            </section>
            <Footer />
        </main>
    );
}    
    
    
    
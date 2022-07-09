import React from 'react';
import { Link, Outlet, useParams } from "react-router-dom";


import "../css/css_reset.css";
import "../css/text_style.css";
import "../css/nav_style.css";
import "../css/note_style.css";

import { getTitle } from "../data/song_builder";


import SingleA from "./images/single_a.png";
import SingleG from "./images/single_g.png";
import SingleF from "./images/single_f.png";



function oneNote(a_song) {
    let params = useParams();
    //let the_song = getTitle(params.songTitle);

    let the_notes = [];
    let the_pix = [];
    
    for (let n=0; n<a_song.notes.length; n++) {
        console.log(a_song.notes[n].pitch)
       
        if (a_song.notes[n].pitch === 'Mi') {
            the_pix.push(<img className="pitch mi" src={SingleA} />);
            the_pix.push(<span className="chord">I</span>);
            the_pix.push(<br />);
            the_pix.push(a_song.notes[n].lyric);
            
        }
        else if (a_song.notes[n].pitch === 'Re') {
            the_pix.push(<img className="pitch re" src={SingleG} />);
            the_pix.push(<span className="chord">V7</span>);
            the_pix.push(<br />);
            the_pix.push(a_song.notes[n].lyric);
        }
        else if (a_song.notes[n].pitch === 'Do') {
            the_pix.push(<img className="pitch do" src={SingleF} />);
            the_pix.push(<span className="chord">I</span>);
            the_pix.push(<br />);
            the_pix.push(a_song.notes[n].lyric);
        }
    }
    
    return the_pix
}




export default function SongPage() {
    let params = useParams();
    let the_song = getTitle(params.songTitle);
    
    return (
        <main style={{ padding: "1rem" }}>
            <h1 className = "title">{params.songTitle}</h1>
            <p> {the_song.score_data.score_def_timestamp}</p>
            <section className=the_song.score_data.meter>
                {oneNote(the_song)}
            </section>
            
        </main>
    );
}


import React from 'react';
import { Link, Outlet, useParams } from "react-router-dom";


import "../css/css_reset.css";
import "../css/text_style.css";
import "../css/nav_style.css";
import "../css/note_style.css";

import { getTitle } from "../data/song_builder";




function oneNote(pitch) {
    let params = useParams();
    let the_song = getTitle(params.songTitle);
    
    if (pitch === 'Mi') {
        return (
            <img class="pitch mi" src="../images/single_f.png" /> 
        )
    } 
}




export default function SongPage() {
    let params = useParams();
    let the_song = getTitle(params.songTitle);
    
    return (
        <main style={{ padding: "1rem" }}>
            <h1 className = "title">{params.songTitle}</h1>
            <p> {the_song.score_data.score_def_timestamp}</p>
            <p> {oneNote(the_song.notes[0].pitch)}</p>
        </main>
    );
}
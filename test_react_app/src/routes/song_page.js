import React from 'react';
import { Link, Outlet, useParams } from "react-router-dom";


import "../css/css_reset.css";
import "../css/text_style.css";
import "../css/nav_style.css";
import "../css/note_style.css";

import { getTitle } from "../data/song_builder";


export default function SongPage() {
    let params = useParams()
    let song = getTitle(params.songTitle);
    
    return (
        <main style={{ padding: "1rem" }}>
            <h1 className = "title">{params.songTitle}</h1>
            <p> how now brown cow</p>
        </main>
    );
}
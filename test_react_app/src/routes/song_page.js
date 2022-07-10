import React from 'react';
import { Link, Outlet, useParams } from "react-router-dom";


import "../css/css_reset.css";
import "../css/text_style.css";
import "../css/nav_style.css";
import "../css/note_style.css";

import { getTitle } from "../data/song_builder";
import { white_transpose, black_transpose } from "../js/transpose";
/*import { white_2note_chords, black_2note_chords } from "../js/chord_view";*/


import SingleA from "../images/single_a.png";
import SingleG from "../images/single_g.png";
import SingleF from "../images/single_f.png";
import Arrow from "../images/short_arrow.png";

import LfFour from "../images/L4.png";
import LfThree from "../images/L3.png";
import LfTwo from "../images/L2.png";



function oneNote(a_note) {
    let the_pix = [];

    if (a_note === 'Mi') {
        the_pix.push(<img className="fingerings" src={LfTwo} />)
        the_pix.push(<span className="chord">I</span>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch mi" src={SingleA} />)
    }
    else if (a_note === 'Re') {
        the_pix.push(<img className="fingerings" src={LfThree} />)
        the_pix.push(<span className="chord">V7</span>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch re" src={SingleG} />)
    }
    else if (a_note === 'Do') {
        the_pix.push(<img className="fingerings" src={LfFour} />)
        the_pix.push(<span className="chord">I</span>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch do" src={SingleF} />)
    }
    return the_pix
}

function writeSong(a_song) {
    let component_list = []
    
    for (let n=0; n<a_song.notes.length; n++) {
        if (a_song.notes[n].duration === 'short') {
            component_list.push(
                <div class="note">
                <p class="tonic">
                {oneNote(a_song.notes[n].pitch)}
                <br />
                {a_song.notes[n].lyric}
                </p>
                </div>
            )}
            else if (a_song.notes[n].duration === 'medium') {
                component_list.push(
                    <div class="note">
                        <p class="tonic">
                            {oneNote(a_song.notes[n].pitch)}
                            <br />
                            {a_song.notes[n].lyric}
                        </p>
                    </div>)
                    
                component_list.push(
                    <div class="note">
                        <p class="arrow">
                            <br />
                            <img class="lengthen" src={Arrow} />
                            <br />
                        </p>
                    </div>)
            }
            else if (a_song.notes[n].duration === 'long') {
                component_list.push(
                    <div class="note">
                        <p class="tonic">
                            {oneNote(a_song.notes[n].pitch)}
                            <br />
                            {a_song.notes[n].lyric}
                        </p>
                    </div>)
                    
                component_list.push(
                    <div class="note">
                        <p class="arrow">
                            <br />
                            <img class="lengthen" src={Arrow} />
                            <br />
                        </p>
                    </div>)
                component_list.push(
                    <div class="note">
                        <p class="arrow">
                            <br />
                            <img class="lengthen" src={Arrow} />
                            <br />
                        </p>
                    </div>)
                component_list.push(
                    <div class="note">
                        <p class="arrow">
                            <br />
                            <img class="lengthen" src={Arrow} />
                            <br />
                        </p>
                    </div>)
            } 
    }
    return component_list
}

function makeButtons(){
    return (
        <div class="buttons">
            <button class="transpose-button white" onclick="white_transpose()">White Key Melody</button>    
            <button class="transpose-button black" onclick="black_transpose()">Black Key Melody</button>
            <button class="chord-button white" onclick="white_2note_chords()">White Key Chords</button>
            <button class="chord-button black" onclick="black_2note_chords()">Black Key Chords</button>
        </div>
    )
}


export default function SongPage() {
    let params = useParams();
    let the_song = getTitle(params.songTitle);
    
    return (
        <main style={{ padding: "1rem" }}>
            <header>
                {makeButtons()}
                <h1 className = "title">{params.songTitle}</h1>
            </header>
            <section className={the_song.score_data.meter}>
                {writeSong(the_song)}
            </section>
        </main>
    );
}


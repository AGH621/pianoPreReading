import React from 'react';
import { Link, Outlet, useParams } from "react-router-dom";


import "../css/css_reset.css";
import "../css/text_style.css";
import "../css/nav_style.css";
import "../css/note_style.css";

import { getTitle } from "../data/song_builder";
import Footer from "./footer";

import { white_transpose, black_transpose } from "../js/transpose";
import { white_2note_chords, black_2note_chords } from "../js/chord_view";



import SingleA from "../images/single_a.png";
import SingleG from "../images/single_g.png";
import SingleF from "../images/single_f.png";
import SingleC from "../images/single_c.png";
import SingleD from "../images/single_d.png";
import SingleBflat from "../images/single_a_sharp.png";

import Arrow from "../images/short_arrow.png";

import LfFour from "../images/L4.png";
import LfThree from "../images/L3.png";
import LfTwo from "../images/L2.png";



function oneNote(a_note) {
    let the_pix = [];

    if (a_note === 'mi') {
        the_pix.push(<img className="fingerings" src={LfTwo} />)
        the_pix.push(<span className="chord">I</span>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch mi" src={SingleA} />)
    }
    else if (a_note === 're') {
        the_pix.push(<img className="fingerings" src={LfThree} />)
        the_pix.push(<span className="chord">V7</span>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch re" src={SingleG} />)
    }
    else if (a_note === 'do') {
        the_pix.push(<img className="fingerings" src={LfFour} />)
        the_pix.push(<span className="chord">I</span>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch do" src={SingleF} />)
    }
    else if (a_note === 'sol') {
        the_pix.push(<img className="fingerings" src={LfFour} />)
        the_pix.push(<span className="chord">V7</span>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch sol" src={SingleC} />)
    }
    else if (a_note === 'la') {
        the_pix.push(<img className="fingerings" src={LfFour} />)
        the_pix.push(<span className="chord">IV</span>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch la" src={SingleD} />)
    }
    else if (a_note === 'fa') {
        the_pix.push(<img className="fingerings" src={LfFour} />)
        the_pix.push(<span className="chord">IV</span>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch fa" src={SingleBflat} />)
    }
    return the_pix
}

function writeSong(a_song) {
    let component_list = []
    
    for (let n=0; n<a_song.notes.length; n++) {
        if (a_song.notes[n].duration === 'Tiny') {
            component_list.push(
                <div class="note">
                <p class="tonic">
                {oneNote(a_song.notes[n].pitch)}
                <br />
                {a_song.notes[n].lyric}
                </p>
                </div>
            )}
            else if (a_song.notes[n].duration === 'Short') {
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
            else if (a_song.notes[n].duration === 'Kinda_Short') {
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
            }
            else if (a_song.notes[n].duration === 'Medium') {
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
            else if (a_song.notes[n].duration === 'Kinda_Long') {
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
            else if (a_song.notes[n].duration === 'Long') {
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


export default function SongPage() {
    let params = useParams();
    let the_song = getTitle(params.songTitle);
    
    return (
        <main>
            <div className="columns">
            <nav className="songs">
                <h3 className="song-nav">View Options</h3>
                    <hr className="test" />

                    <h4 className="nav-subhead">Melody View</h4>
                    <button className="melody-button" onClick={white_transpose}>White Keys</button>
                    <button className="melody-button" onClick={black_transpose}>Black Keys</button>
                    <button className="melody-button">Letter Names</button>
                    <button className="melody-button">Chord Symbols</button>
                    <button className="melody-button">Finger Numbers</button>

                    <hr className="test" />
            
                    <h4 className="nav-subhead">Chord View</h4>
                    <button className="chord-button">White Keys</button>
                    <button className="chord-button">Black Keys</button>
                    <button className="chord-button">2 Note Chords</button>
                    <button className="chord-button">3 Note Chords</button>
                    <button className="chord-button"> Chord Symbols</button>
                    <button className="chord-button">Finger Numbers</button>

                    <hr className="test" />
        
                    <h4 className="nav-subhead">Other Views</h4>
                    <button className="other-button">Hide Lyrics</button>
                    <button className="other-button">Additional Verses</button>
                    <button className="other-button">Solfege Names</button>
            </nav>
            <div className="home">
            <h1 className = "title">{params.songTitle}</h1>
            <section className={the_song.score_data.meter.toLowerCase()}>
                {writeSong(the_song)}
            </section>
            </div>    
            </div>
            <Footer />   
        </main>
    );
}


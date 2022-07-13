import React from 'react';
import { Link, Outlet } from "react-router-dom";

import "../css/css_reset.css";
import "../css/text_style.css";
import "../css/nav_style.css";
import "../css/note_style.css";


import { allTitles } from "../data/song_builder";


export default function SongList() {
    
    let songs = allTitles();
    
    return (
        <main>
    
            <section class="home">
            <h1 class="title" name="top" id="top">Song List</h1>
        
            <ul class="alpha-list home">
                <li class="alphabet"><a class="in-link" href="#A">A</a></li>
                <li class="alphabet"><a class="in-link" href="#B">B</a></li>
                <li class="alphabet">C</li>
                <li class="alphabet">D</li>
                <li class="alphabet">E</li>
                <li class="alphabet"><a class="in-link" href="#F">F</a></li>
                <li class="alphabet"><a class="in-link" href="#G">G</a></li>
                <li class="alphabet"><a class="in-link" href="#H">H</a></li>
                <li class="alphabet"><a class="in-link" href="#I">I</a></li>
                <li class="alphabet"><a class="in-link" href="#J">J</a></li>
                <li class="alphabet"><a class="in-link" href="#K">K</a></li>
                <li class="alphabet"><a class="in-link" href="#L">L</a></li>
                <li class="alphabet"><a class="in-link" href="#M">M</a></li>
                <li class="alphabet">N</li>
                <li class="alphabet"><a class="in-link" href="#O">O</a></li>
                <li class="alphabet"><a class="in-link" href="#P">P</a></li>
                <li class="alphabet">Q</li>
                <li class="alphabet"><a class="in-link" href="#R">R</a></li>
                <li class="alphabet"><a class="in-link" href="#S">S</a></li>
                <li class="alphabet"><a class="in-link" href="#T">T</a></li>
                <li class="alphabet">U</li>
                <li class="alphabet">V</li>
                <li class="alphabet"><a class="in-link" href="#W">W</a></li>
                <li class="alphabet">X</li>
                <li class="alphabet">Y</li>
                <li class="alphabet">Z</li>
            </ul>
        
            <h3 className="graph-subhead" name="A" id="A"><a class="in-link" href="#top">A</a></h3>
            <ul>
                {songs.map((song) => (
                    song.startsWith('A') ? <li className="bullets one-indent"><Link className="song-list" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="B" id="B"><a class="in-link" href="#top">B</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('B') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
            
            <h3 class="graph-subhead" name="C" id="C"><a class="in-link" href="#top">C</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('C') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="D" id="D"><a class="in-link" href="#top">D</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('D') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="E" id="E"><a class="in-link" href="#top">E</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('E') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="F" id="F"><a class="in-link" href="#top">F</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('F') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="G" id="G"><a class="in-link" href="#top">G</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('G') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="H" id="H"><a class="in-link" href="#top">H</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('H') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="I" id="I"><a class="in-link" href="#top">I</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('I') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="J" id="J"><a class="in-link" href="#top">J</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('J') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="K" id="K"><a class="in-link" href="#top">K</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('K') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="L" id="L"><a class="in-link" href="#top">L</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('L') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="M" id="M"><a class="in-link" href="#top">M</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('M') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="N" id="N"><a class="in-link" href="#top">N</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('N') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="O" id="O"><a class="in-link" href="#top">O</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('O') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="P" id="P"><a class="in-link" href="#top">P</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('P') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="Q" id="Q"><a class="in-link" href="#top">Q</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('Q') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="R" id="R"><a class="in-link" href="#top">R</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('R') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="S" id="S"><a class="in-link" href="#top">S</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('S') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="T" id="T"><a class="in-link" href="#top">T</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('T') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="U" id="U"><a class="in-link" href="#top">U</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('U') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="V" id="V"><a class="in-link" href="#top">V</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('V') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="W" id="W"><a class="in-link" href="#top">W</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('W') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="X" id="X"><a class="in-link" href="#top">X</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('X') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="Y" id="Y"><a class="in-link" href="#top">Y</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('Y') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            <h3 class="graph-subhead" name="Z" id="Z"><a class="in-link" href="#top">Z</a></h3>
            <ul class="one-indent">
                {songs.map((song) => (
                    song.startsWith('Z') ? <li class="bullets"><Link className="song-title" to={`/${song}`} key={song}>
                    {song}
                    </Link></li>: null 
                ))}
            </ul>
        
            </section>
            <Outlet />   
        </main>
    );
}
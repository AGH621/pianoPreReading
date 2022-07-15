import React from 'react';
import { Link, Outlet } from "react-router-dom";

import "../css/css_reset.css";
import "../css/text_style.css";
import "../css/nav_style.css";
import "../css/note_style.css";

import Footer from "./footer";

export default function About () {
    return (
        <div>
            <main>
                <section class="home">
                    <h1 class="title">About This Project</h1>
                    <p class="intro">Hi There!  I&#39;m Anne Hamill.  Welcome to my first web-development project.  If you would like to know more, please  <a class="in-link" href="mailto: saxmusicology@gmail.com">get in touch</a></p>
        
                    <h2 class="graph-head">My Background</h2>
                    <p class="intro">For the last 20-ish years, I have been a music teacher in public schools, private schools, and in my own studio.  My students range from 5 years of age all the way to adults whose children have grown up.  In schools, I have taught band, orchestra, choir, general music, guitar, theory, piano, and computer music.  In my studio, I have had students learning orchestral strings, guitar, piano, woodwinds and brass.</p>
                    <p class="intro">Throughout the course of my school teaching, I have been required to write my own curriculum, becoming fascinated with course design along the way.  I have mentored others in writing their own elementary music curriculum, and currently hold the position of Curriculum Director at <a href="https://mfm.org/" target="_blank">Music for Minors</a> where I write lessons for about 40 elementary music teachers.</p>
        
                    <p class="intro">Lately I have become interested in computer programming and website development.  This site is my first foray into combining my first love, music, with my new love, programming.</p>
        
                    <h2 class="graph-head">Project History</h2>
                    <p class="intro">This is actually PreReading Piano Book 2.0.  Version 1.0 was created in 2013 when I grew frustrated with the piano method book series I use with young students.  All students, especially the young ones, want to play songs, and can tell the difference between real ones, and those written as exercises in piano method books.  Problem is, these young students cannot read standard music notation yet.  So, I transcribed some 3-note folksongs commonly sung in elementary music classes into graphic notation.  The key to be played is colored and the arrows show long a key should be depressed.  I ended up with 12 songs: 6 in duple meter, 6 in triple meter.  Soon I made a set of 4-note songs, then pentatonic, then diatonic.  Each set adding elements of standard notation.  Even though they were printed on 11x17 paper and unweildly, my students loved them!</p>
        
                    <p class="intro">In 2021, while having problems keeping the huge sheet of paper on a rickety music rack, I had a brain wave.  Why not               convert these sheets of paper into a website!  And that is what you see today.  It is still a work in progress (as I continue to learn               how to design and program) and not all of the songs have been converted yet.  But I feel I&#39;ve done enough to publish an initial                      iteration.</p>
        
                    <h2 class="graph-head">Technical Details</h2>
                    <p class="intro">All the pages here are hand-written HTML and CSS. All the design elements were created by me with a white sheet of                  paper, hours of internet research, and even more experimentation.</p>
            
                    <p class="intro">Currently, I am reworking the CSS so it is more efficient and readable.</p>
        
                </section>
            </main>
            <Footer />
        </div>                    
    )
}
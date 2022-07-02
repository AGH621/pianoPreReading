import React from 'react';
import { Link } from "react-router-dom";


function Home() {
    return (
            <main>
                <section class="home">
                <h1 class="title">PreReading Piano Book</h1>
                <p class="intro">This is a set of folksongs designed for students who are not yet reading standard notation.  They can be used to:</p>
        
                <ul class="two-indent">
                    <li class="bullets">Learn authentic folksongs.</li>
                    <li class="bullets">Learn to play melodies with hands together.</li>
                    <li class="bullets">Learn to play songs with chordal accompaniment.</li>
                </ul>
        
                <p class="intro">More information about how you can use these songs in your studio can be found here</p>
        
                <p class="intro">To get started, select a song from one of the menus at the top of the page.</p>  
        
                </section>
            </main>

    );
}

export default Home;
import React from 'react';
//import {Link} from 'react-router-dom';


function Usage() {
    return (
        <main>
            <section class="home">
                
                <h1 class="title">Using These Songs</h1>
                <p class="intro">There are many ways to play these songs; use them in a way which makes sense for you and your students. In my studio we             use them as solo repertoire while also working through a well-known piano method.</p>
            
                <h2 class="graph-head">Teaching Sequence</h2>
                <p class="intro">I use the following steps to teach the songs.  Feel free to skip steps or add more.  Remember the right way is the way              that works for your students.</p>
            
                <h3 class="graph-subhead">Melody</h3>
                <ul class="one-indent"> 
                    <li class="bullets">Play the melody as written with the right hand by itself and the left hand by itself.</li>
                    <li class="bullets">Play the melody as written with both hands at the same time.</li>
                    <li class="bullets">If the melody is written for the white keys, play it on the black keys and vice versa.</li>
                    <li class="bullets">Play the melody with a combination of black and white keys. You establish the combinations</li>
                    <li class="bullets">Play the melody anywhere on the keyboard the student chooses. (This leads to some interesting polytonality!)</li>
                </ul>
                    
                <h3 class="graph-subhead">Chords</h3>
                <ul class="one-indent">
                    <li class="bullets">Learn the chords by themselves with both hands, separately and together.</li>
                    <li class="bullets">Play the melody with the right hand and the chords with the left.</li>
                    <li class="bullets">Play the melody with left hand and the chords with the right.</li>
                </ul>

                <h2 class="graph-head">Unit Concepts</h2>
            
                <h3 class="graph-subhead">3 Note Songs</h3>
                <p class="one-indent">Use only the pitches do, re and mi.  All songs are in the major mode, with an equal split between duple and triple             meter.  I let students use any finger they want, as long as each finger plays only one key.</p>

                <h3 class="graph-subhead">4 Note Songs</h3>
                <p class="one-indent">Use the pitches do, re, mi and sol.  All songs are in the major mode, with an equal split between duple and triple             meter. I require my students to play with the fingers indicated in each score.</p>

                <h3 class="graph-subhead">Diatonic Songs</h3>
                <p class="one-indent">These are easier to play than the pentatonic songs as they are in 5-finger position without any stretches.  All                songs are in the major mode, with an equal split between duple and triple meter. Standard rhythm notation is added, but the notation                 does not have time signatures or bar lines.</p>

                <h3 class="graph-subhead">Penatonic Songs</h3>
                <p class="one-indent">These songs use an extended hand position which skips the note fa. All songs are in the major mode, with an equal              split between duple and triple meter. Time signatures and barlines are added to the notation.</p>
            </section>
        
            <section class="home">

                <h2 class="graph-head"> Repertoire Considerations</h2>
            
                <h3 class="graph-subhead">Copyright</h3>
                <p class="one-indent">This collection contains only folksongs due to copyright restrictions. I cannot afford to pay the licensing fees               necessary to publish songs outside the public domain. While I have traced the history and background of each song to the best of my                  ability, I am human and therefore make mistakes. If you think I have inadvertently included a copyrighted piece, please <a class="in-link" href="mailto:             saxmusicology@gmail.com">contact me!</a></p>
            
                <h3 class="graph-subhead">Subject Matter</h3>
                <p class="one-indent">As folksongs from earlier times, there may be lyrics which do not fit some people&#39;s sensibilities and                          sensitivities. You are welcome to skip the songs which you do not like, that is your perogative. However, as a deep believer in                      diversity of thought, I will not remove songs from this site unless there is a verifiable copyright claim.</p>
            </section>
        </main>
    );
}  

export default Usage;

      
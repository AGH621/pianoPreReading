import React from 'react';
import { Link, Outlet } from "react-router-dom";

import "../css/css_reset.css";
import "../css/text_style.css";
import "../css/nav_style.css";
import "../css/note_style.css";

export default function SongList() {
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
        
            <h3 class="graph-subhead" name="A" id="A"><a class="in-link" href="#top">A</a></h3>
            <ul class="one-indent">
                <li class="bullets"><a class="in-link" href="../three-note/au_claire_de_la_lune.html">Au Claire de la Lune</a></li>
            </ul>
        
            <h3 class="graph-subhead" name="B" id="B"><a class="in-link" href="#top">B</a></h3>
            <ul class="one-indent">
                <li class="bullets"><a class="in-link" href="../three-note/babylons_fallin.html">Babylon&#39;s Fallin&#39;</a></li>
                <li class="bullets"><a class="in-link" href="../four-note/bells_in_the_steeple.html">Bells in the Steeple</a></li>
            </ul>
            
            <h3 class="graph-subhead" name="C" id="C"><a class="in-link" href="#top">C</a></h3>
            <ul class="one-indent">
            </ul>
        
            <h3 class="graph-subhead" name="D" id="D"><a class="in-link" href="#top">D</a></h3>
            <ul class="one-indent">
            </ul>
        
            <h3 class="graph-subhead" name="E" id="E"><a class="in-link" href="#top">E</a></h3>
            <ul class="one-indent">
            </ul>
        
            <h3 class="graph-subhead" name="F" id="F"><a class="in-link" href="#top">F</a></h3>
            <ul class="one-indent">
                <li class="bullets"><a class="in-link" href="../three-note/fais_do_do.html">Fais Do Do</a></li>
                <li class="bullets"><a class="in-link" href="../four-note/fooba_wooba.html">Fooba Wooba</a></li>
                <li class="bullets"><a class="in-link" href="../three-note/frog_in_the_meadow.html">Frog in the Meadow</a></li>
            </ul>
        
            <h3 class="graph-subhead" name="G" id="G"><a class="in-link" href="#top">G</a></h3>
            <ul class="one-indent">
                <li class="bullets"><a class="in-link" href="../four-note/go_to_sleep.html">Go to Sleep</a></li>
            </ul>
        
            <h3 class="graph-subhead" name="H" id="H"><a class="in-link" href="#top">H</a></h3>
            <ul class="one-indent">
                <li class="bullets"><a class="in-link" href="../three-note/hot_cross_buns.html">Hot Cross Buns</a></li>
            </ul>
        
            <h3 class="graph-subhead" name="I" id="I"><a class="in-link" href="#top">I</a></h3>
            <ul class="one-indent">
                <li class="bullets"><a class="in-link" href="../four-note/i_have_a_dog.html">I Have a Dog</a></li>
                <li class="bullets"><a class="in-link" href="../three-note/im_a_little_dutch_girl.html">I&#39;m a Little Dutch Girl</a></li>
            </ul>
        
            <h3 class="graph-subhead" name="J" id="J"><a class="in-link" href="#top">J</a></h3>
            <ul class="one-indent">
                <li class="bullets"><a class="in-link" href="../three-note/johnny_had_one_friend.html">Johnny Had One Friend</a></li>
                <li class="bullets"><a class="in-link" href="../four-note/johnny_works_with_one_hammer.html">Johnny Works with One Hammer</a></li>
            </ul>
        
            <h3 class="graph-subhead" name="K" id="K"><a class="in-link" href="#top">K</a></h3>
            <ul class="one-indent">
                <li class="bullets"><a class="in-link" href="../four-note/knock_at_the_door.html">Knock at the Door</a></li>
            </ul>
        
            <h3 class="graph-subhead" name="L" id="L"><a class="in-link" href="#top">L</a></h3>
            <ul class="one-indent">
                <li class="bullets"><a class="in-link" href="../four-note/ladybug.html">Ladybug</a></li>
                <li class="bullets"><a class="in-link" href="../four-note/let_us_chase_the_squirrel.html">Let Us Chase the Squirrel</a></li>
                <li class="bullets"><a class="in-link" href="../four-note/little_tom_tinker.html">Little Tom Tinker</a></li>
            </ul>
        
            <h3 class="graph-subhead" name="M" id="M"><a class="in-link" href="#top">M</a></h3>
            <ul class="one-indent">
                <li class="bullets"><a class="in-link" href="../three-note/mother_may_i_go_out.html">Mother May I Go Out</a></li>
            </ul>
        
            <h3 class="graph-subhead" name="N" id="N"><a class="in-link" href="#top">N</a></h3>
            <ul class="one-indent">
            </ul>
        
            <h3 class="graph-subhead" name="O" id="O"><a class="in-link" href="#top">O</a></h3>
            <ul class="one-indent">
                <li class="bullets"><a class="in-link" href="../four-note/old_aunt_dinah.html">Old Aunt Dinah</a></li>
                <li class="bullets"><a class="in-link" href="../four-note/old_obidiah.html">Old Obidah</a></li>
            </ul>
        
            <h3 class="graph-subhead" name="P" id="P"><a class="in-link" href="#top">P</a></h3>
            <ul class="one-indent">
                <li class="bullets"><a class="in-link" href="../three-note/pitter_patter.html">Pitter Patter</a></li>
            </ul>
        
            <h3 class="graph-subhead" name="Q" id="Q"><a class="in-link" href="#top">Q</a></h3>
            <ul class="one-indent">
            </ul>
        
            <h3 class="graph-subhead" name="R" id="R"><a class="in-link" href="#top">R</a></h3>
            <ul class="one-indent">
                <li class="bullets"><a class="in-link" href="../three-note/rock_a_bye.html">Rock-a-bye</a></li>
            </ul>
        
            <h3 class="graph-subhead" name="S" id="S"><a class="in-link" href="#top">S</a></h3>
            <ul class="one-indent">
                <li class="bullets"><a class="in-link" href="../three-note/sailor_sailor.html">Sailor Sailor</a></li>
            </ul>
        
            <h3 class="graph-subhead" name="T" id="T"><a class="in-link" href="#top">T</a></h3>
            <ul class="one-indent">
                <li class="bullets"><a class="in-link" href="../three-note/there_she_goes.html">There She Goes</a></li>
            </ul>
        
            <h3 class="graph-subhead" name="U" id="U"><a class="in-link" href="#top">U</a></h3>
            <ul class="one-indent">
            </ul>
        
            <h3 class="graph-subhead" name="V" id="V"><a class="in-link" href="#top">V</a></h3>
            <ul class="one-indent">
            </ul>
        
            <h3 class="graph-subhead" name="W" id="W"><a class="in-link" href="#top">W</a></h3>
            <ul class="one-indent">
                <li class="bullets"><a class="in-link" href="../four-note/wholl_buy_me_milk_cans.html">Who&#39;ll Buy Me Milk Cans</a></li>
            </ul>
        
            <h3 class="graph-subhead" name="X" id="X"><a class="in-link" href="#top">X</a></h3>
            <ul class="one-indent">
            </ul>
        
            <h3 class="graph-subhead" name="Y" id="Y"><a class="in-link" href="#top">Y</a></h3>
            <ul class="one-indent">
            </ul>
        
            <h3 class="graph-subhead" name="Z" id="Z"><a class="in-link" href="#top">Z</a></h3>
            <ul class="one-indent">
            </ul>
        
            </section>
        </main>
    );
}
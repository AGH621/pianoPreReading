/*
Development space for creating a button group for the transposing function.    
*/


import React, { useState } from "react";
import styled from 'styled-components';

import "../css/css_reset.css";
import "../css/text_style.css";
import "../css/nav_style.css";
import "../css/note_style.css";

// import black key notes
import SingleAsharp from "../images/single_a_sharp.png";
import SingleGsharp from "../images/single_g_sharp.png";
import SingleFsharp from "../images/single_f_sharp.png";
import SingleCsharp from "../images/single_c_sharp.png";
import SingleDsharp from "../images/single_d_sharp.png";


//import white key notes
import SingleA from "../images/single_a.png";
import SingleG from "../images/single_g.png";
import SingleF from "../images/single_f.png";
import SingleC from "../images/single_c.png";
import SingleD from "../images/single_d.png";
import SingleB from "../images/single_b.png";
import SingleE from "../images/single_e.png";



function BlackKeyButton() {
/*
Creates a button which displays the melody as played on the piano's black keys.
TODO: Send state to parent component? (What is the parent component?)
*/
    //Set the button state.
    let [value, setButton] = useState("melody-button-active");
    
    //Get the pitches from the DOM.
    let the_fs = document.getElementsByClassName('pitch do')
    let the_gs = document.getElementsByClassName('pitch re')
    let the_as = document.getElementsByClassName('pitch mi')
    let the_bbs = document.getElementsByClassName('pitch fa')
    let the_cs = document.getElementsByClassName('pitch sol')
    let the_ds = document.getElementsByClassName('pitch la')
    let the_es = document.getElementsByClassName('pitch ti')
    
    //Transpose each pitch up a minor second (to a black key).
    for (let x=0; x<the_fs.length; x++){
        the_fs[x].src = SingleFsharp
        }
    for (let x=0; x<the_gs.length; x++){
        the_gs[x].src = SingleGsharp
        }
    for (let x=0; x<the_as.length; x++){
        the_as[x].src = SingleAsharp
        }
    for (let x=0; x<the_bbs.length; x++){
        the_bbs[x].src = SingleB
        }
    for (let x=0; x<the_cs.length; x++){
        the_cs[x].src = SingleCsharp
        }
    for (let x=0; x<the_ds.length; x++){
        the_ds[x].src = SingleDsharp
        }
    for (let x=0; x<the_es.length; x++){
        the_es[x].src = SingleF
        }
    //Return the actual button. Change the button state and appearance when clicked.
    return (
        <button className={value} onClick={() => setButton(value === "melody-button-active" ? "melody-button-inactive" : "melody-button-active")}>Black Keys</button>
    )
}


function WhiteKeyButton() {
/*
Creates a button which displays the melody as played on the piano's black keys.
TODO: Send state to parent component? (What is the parent component?)
*/
    //Set the button state.
    let [value, setButton] = useState("melody-button-inactive");
    
    //Get the pitches from the DOM.
    let the_fsharps = document.getElementsByClassName('pitch do')
    let the_gsharps = document.getElementsByClassName('pitch re')
    let the_asharps = document.getElementsByClassName('pitch mi')
    let the_bs      = document.getElementsByClassName('pitch fa')
    let the_csharps = document.getElementsByClassName('pitch sol')
    let the_dsharps = document.getElementsByClassName('pitch la')
    let the_fs      = document.getElementsByClassName('pitch ti')
    
    //Transpose each pitch down a minor second (to a black key).
    for (let x=0; x<the_fsharps.length; x++){
        the_fsharps[x].src = SingleF
        }
    for (let x=0; x<the_gsharps.length; x++){
        the_gsharps[x].src = SingleG
        }
    for (let x=0; x<the_asharps.length; x++){
        the_asharps[x].src = SingleA
        }
    for (let x=0; x<the_bs.length; x++){
        the_bs[x].src = SingleAsharp
        }
    for (let x=0; x<the_csharps.length; x++){
        the_csharps[x].src = SingleC
        }
    for (let x=0; x<the_dsharps.length; x++){
        the_dsharps[x].src = SingleD
        }
    for (let x=0; x<the_fs.length; x++){
        the_fs[x].src = SingleE
        }
    //Return the actual button. Change the button state and appearance when clicked.
    return (
        <button className={value} onClick={() => setButton(value === "melody-button-inactive" ? "melody-button-active" : "melody-button-inactive")}>White Keys</button>
    )    
} 







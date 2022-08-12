/*
Transpose
Created By: Anne Hamill
Date: 29 May 2022
Description: Change the symbolic notation images from white key melody to black key and vice versa.
TODO: Improve the two functions by figuring how to make the if/else if conditionals into switch statements.
*/

import React, { useState } from "react";
import styled from 'styled-components';

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


export function TransposeRadioButtons() {
/*
Return a group of two radio buttons to change the melody from black keys to white keys.
handleChange() controls each button's state and appearance.
onClick() changes the notes appearing on the screen.
*/
    //Set the buttons states.
    let [keys, setKeys] = useState("");
    
    //Function for handling changes in state and button appearance.
    let handleChange=(e)=>{
        
        //Change the button's state when its pressed
        setKeys(e.target.value)
        
        //When the black key button is pressed, deactivate the white key button make the black one active
        if (e.target.value === 'black') {
            
            let inactive_button = document.getElementById('white')
            inactive_button.className="melody-button-inactive"
            
            let active_button = document.getElementById('black')
            active_button.className="melody-button-active"
        }
        
        //Do the opposite when the white key button is pressed
        else if (e.target.value === 'white') {

            let inactive_button = document.getElementById('black')
            inactive_button.className="melody-button-inactive"
            
            let active_button = document.getElementById('white')
            active_button.className="melody-button-active"
        }
    }
    
    //React component to go export to the song page.
    return (
        <section>
            <div className="container">
                <label className="melody-button-active" id="white" for="white">
                    <input type="radio" value="white" defaultChecked onChange={handleChange} onClick={white_transpose} name="keys" />
                </label>
                <span className="melody-button-inactive" id="overlay">White Keys</span>
            </div>
            <div className="container">
                <label className="melody-button-inactive" id="black" for="black">
                    <input type="radio" value="black" onChange={handleChange} onClick={black_transpose} name="keys" />
                </label>
                <span className="melody-button-inactive" id="overlay">Black Keys</span>
            </div>
        </section>
    )
}


function black_transpose() {
    let the_fs = document.getElementsByClassName('pitch do')
    let the_gs = document.getElementsByClassName('pitch re')
    let the_as = document.getElementsByClassName('pitch mi')
    let the_bbs = document.getElementsByClassName('pitch fa')
    let the_cs = document.getElementsByClassName('pitch sol')
    let the_ds = document.getElementsByClassName('pitch la')
    let the_es = document.getElementsByClassName('pitch ti')
    
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
}


function white_transpose() {
    let the_fsharps = document.getElementsByClassName('pitch do')
    let the_gsharps = document.getElementsByClassName('pitch re')
    let the_asharps = document.getElementsByClassName('pitch mi')
    let the_bs      = document.getElementsByClassName('pitch fa')
    let the_csharps = document.getElementsByClassName('pitch sol')
    let the_dsharps = document.getElementsByClassName('pitch la')
    let the_fs      = document.getElementsByClassName('pitch ti')
    
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
}
    




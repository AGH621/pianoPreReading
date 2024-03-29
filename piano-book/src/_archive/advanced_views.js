/*
Transpose
Created By: Anne Hamill
Version: 0.1
Date: 29 May 2022
Description: Change the symbolic notation images from white key melody to black key and vice versa.
TODO: Archive this module? It looks to have been superceded by view_transpose.
*/

//External imports
import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

//Black key diagram imports
import SingleAsharp from "../images/notes_key_diagram/single_a_sharp.png";
import SingleGsharp from "../images/notes_key_diagram/single_g_sharp.png";
import SingleFsharp from "../images/notes_key_diagram/single_f_sharp.png";
import SingleCsharp from "../images/notes_key_diagram/single_c_sharp.png";
import SingleDsharp from "../images/notes_key_diagram/single_d_sharp.png";

//White key diagram imports
import SingleA from "../images/notes_key_diagram/single_a.png";
import SingleG from "../images/notes_key_diagram/single_g.png";
import SingleF from "../images/notes_key_diagram/single_f.png";
import SingleC from "../images/notes_key_diagram/single_c.png";
import SingleD from "../images/notes_key_diagram/single_d.png";
import SingleB from "../images/notes_key_diagram/single_b.png";
import SingleE from "../images/notes_key_diagram/single_e.png";


// Modify this function to transpose the melody to other positions (G, C, etc)
export function MelodyRadioButtons() {
/*
    Return a group of radio buttons to switch the melody to different positions.
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
            
            let inactive_button1 = document.getElementById('white')
            inactive_button1.className="button-inactive"
            
            let inactive_button2 = document.getElementById('white-2note')
            inactive_button2.className="button-inactive"
            
            let inactive_button3 = document.getElementById('black-2note')
            inactive_button3.className="button-inactive"
            
            let inactive_button4 = document.getElementById('white-3note')
            inactive_button4.className="button-inactive"
            
            let inactive_button5 = document.getElementById('black-3note')
            inactive_button5.className="button-inactive"
            
            let active_button = document.getElementById('black')
            active_button.className="melody-button-active"
        }
        
        //Do the opposite when the white key button is pressed
        else if (e.target.value === 'white') {

            let inactive_button1 = document.getElementById('black')
            inactive_button1.className="button-inactive"
            
            let inactive_button2 = document.getElementById('white-2note')
            inactive_button2.className="button-inactive"
            
            let inactive_button3 = document.getElementById('black-2note')
            inactive_button3.className="button-inactive"
            
            let inactive_button4 = document.getElementById('white-3note')
            inactive_button4.className="button-inactive"
            
            let inactive_button5 = document.getElementById('black-3note')
            inactive_button5.className="button-inactive"
            
            let active_button = document.getElementById('white')
            active_button.className="melody-button-active"
        }
    }
    
    //React component to go export to the song page.
    return (
        <section>
            <Typography variant="h6">Melody</Typography>
            <div className="container">
                <label className="melody-button-active" id="white" for="white">
                    <input type="radio" value="white" defaultChecked onChange={handleChange} onClick={white_transpose} name="keys" />
                </label>
                <span className="melody-button-inactive" id="overlay">White Key Melody</span>
            </div>
        
            <div className="container">
                <label className="button-inactive" id="black" for="black">
                    <input type="radio" value="black" onChange={handleChange} onClick={black_transpose} name="keys" />
                </label>
                <span className="melody-button-inactive" id="overlay">Black Key Melody</span>
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



/*
Transpose
Created By: Anne Hamill
Date: 29 May 2022
Description: Change the symbolic notation images from white key melody to black key and vice versa.
TODO: Improve the two functions by figuring how to make the if/else if conditionals into switch statements.
*/

import React, { useState } from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

// import black key notes
import SingleAsharp from "../images/notes_key_diagram/single_a_sharp.png";
import SingleGsharp from "../images/notes_key_diagram/single_g_sharp.png";
import SingleFsharp from "../images/notes_key_diagram/single_f_sharp.png";
import SingleCsharp from "../images/notes_key_diagram/single_c_sharp.png";
import SingleDsharp from "../images/notes_key_diagram/single_d_sharp.png";


//import white key notes
import SingleA from "../images/notes_key_diagram/single_a.png";
import SingleG from "../images/notes_key_diagram/single_g.png";
import SingleF from "../images/notes_key_diagram/single_f.png";
import SingleC from "../images/notes_key_diagram/single_c.png";
import SingleD from "../images/notes_key_diagram/single_d.png";
import SingleB from "../images/notes_key_diagram/single_b.png";
import SingleE from "../images/notes_key_diagram/single_e.png";


//Import 2-Note chords
import SimpleWhtI from "../images/chords_key_diagram/simple_wht_tonic.png";
import SimpleWhtV7 from "../images/chords_key_diagram/simple_wht_dom.png";
import SimpleWhtIV from "../images/chords_key_diagram/simple_wht_subdom.png";
import SimpleBlkI from "../images/chords_key_diagram/simple_blk_tonic.png";
import SimpleBlkV7 from "../images/chords_key_diagram/simple_blk_dom.png";
import SimpleBlkIV from "../images/chords_key_diagram/simple_blk_subdom.png";


//Import 3-Note chords
import FullWhtI from "../images/chords_key_diagram/full_wht_tonic.png";
import FullWhtV7 from "../images/chords_key_diagram/full_wht_dom.png";
import FullWhtIV from "../images/chords_key_diagram/full_wht_subdom.png";
import FullBlkI from "../images/chords_key_diagram/full_blk_tonic.png";
import FullBlkV7 from "../images/chords_key_diagram/full_blk_dom.png";
import FullBlkIV from "../images/chords_key_diagram/full_blk_subdom.png";


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
        
        else if (e.target.value === 'white-2note') {

            let inactive_button1 = document.getElementById('black')
            inactive_button1.className="button-inactive"
            
            let inactive_button2 = document.getElementById('white')
            inactive_button2.className="button-inactive"
            
            let inactive_button3 = document.getElementById('black-2note')
            inactive_button3.className="button-inactive"
            
            let inactive_button4 = document.getElementById('white-3note')
            inactive_button4.className="button-inactive"
            
            let inactive_button5 = document.getElementById('black-3note')
            inactive_button5.className="button-inactive"
            
            let active_button = document.getElementById('white-2note')
            active_button.className="melody-button-active"
        }
        
        else if (e.target.value === 'black-2note') {

            let inactive_button1 = document.getElementById('black')
            inactive_button1.className="button-inactive"
            
            let inactive_button2 = document.getElementById('white')
            inactive_button2.className="button-inactive"
            
            let inactive_button3 = document.getElementById('white-2note')
            inactive_button3.className="button-inactive"
            
            let inactive_button4 = document.getElementById('white-3note')
            inactive_button4.className="button-inactive"
            
            let inactive_button5 = document.getElementById('black-3note')
            inactive_button5.className="button-inactive"
            
            let active_button = document.getElementById('black-2note')
            active_button.className="melody-button-active"
        }
        
        else if (e.target.value === 'black-3note') {

            let inactive_button1 = document.getElementById('black')
            inactive_button1.className="button-inactive"
            
            let inactive_button2 = document.getElementById('white')
            inactive_button2.className="button-inactive"
            
            let inactive_button3 = document.getElementById('white-2note')
            inactive_button3.className="button-inactive"
            
            let inactive_button4 = document.getElementById('white-3note')
            inactive_button4.className="button-inactive"
            
            let inactive_button5 = document.getElementById('black-2note')
            inactive_button5.className="button-inactive"
            
            let active_button = document.getElementById('black-3note')
            active_button.className="melody-button-active"
        }
        
        else if (e.target.value === 'white-3note') {

            let inactive_button1 = document.getElementById('black')
            inactive_button1.className="button-inactive"
            
            let inactive_button2 = document.getElementById('white')
            inactive_button2.className="button-inactive"
            
            let inactive_button3 = document.getElementById('white-2note')
            inactive_button3.className="button-inactive"
            
            let inactive_button4 = document.getElementById('white-2note')
            inactive_button4.className="button-inactive"
            
            let inactive_button5 = document.getElementById('black-2note')
            inactive_button5.className="button-inactive"
            
            let active_button = document.getElementById('white-3note')
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
        
            <Divider />
        
            <Typography variant="h6">2-Note Chords</Typography>
        
            <div className="container">
                <label className="button-inactive" id="white-2note" for="white-2note">
                    <input type="radio" value="white-2note" onChange={handleChange} onClick={white_2note_chords} name="keys" />
                </label>
                <span className="melody-button-inactive" id="overlay">White 2-Note Chords</span>
            </div>
        
            <div className="container">
                <label className="button-inactive" id="black-2note" for="black-2note">
                    <input type="radio" value="black-2note" onChange={handleChange} onClick={black_2note_chords} name="keys" />
                </label>
                <span className="melody-button-inactive" id="overlay">Black 2-Note Chords</span>
            </div>
        
            <Divider />
        
            <Typography variant="h6">3-Note Chords</Typography>
        
            <div className="container">
                <label className="button-inactive" id="white-3note" for="white-3note">
                    <input type="radio" value="white-3note" onChange={handleChange} onClick={white_3note_chords} name="keys" />
                </label>
                <span className="melody-button-inactive" id="overlay">White 3-Note Chords</span>
            </div>
        
            <div className="container">
                <label className="button-inactive" id="black-3note" for="black-3note">
                    <input type="radio" value="black-3note" onChange={handleChange} onClick={black_3note_chords} name="keys" />
                </label>
                <span className="melody-button-inactive" id="overlay">Black 3-Note Chords</span>
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


function white_2note_chords() {
    let the_fs = document.getElementsByClassName('pitch do')
    let the_gs = document.getElementsByClassName('pitch re')
    let the_as = document.getElementsByClassName('pitch mi')
    let the_bbs = document.getElementsByClassName('pitch fa')
    let the_cs = document.getElementsByClassName('pitch sol')
    let the_ds = document.getElementsByClassName('pitch la')
    let the_es = document.getElementsByClassName('pitch ti')
    
    for (let x=0; x<the_fs.length; x++){
        the_fs[x].src = SimpleWhtI
        }
    for (let x=0; x<the_gs.length; x++){
        the_gs[x].src = SimpleWhtV7
        }
    for (let x=0; x<the_as.length; x++){
        the_as[x].src = SimpleWhtI
        }
    for (let x=0; x<the_bbs.length; x++){
            the_bbs[x].src = SimpleWhtIV
            }
    for (let x=0; x<the_cs.length; x++){
        the_cs[x].src = SimpleWhtV7
        }
    for (let x=0; x<the_ds.length; x++){
            the_ds[x].src = SimpleWhtIV
            }
    for (let x=0; x<the_es.length; x++){
        the_es[x].src = SimpleWhtV7
        }
    
}


function black_2note_chords() {
    let the_fs = document.getElementsByClassName('pitch do')
    let the_gs = document.getElementsByClassName('pitch re')
    let the_as = document.getElementsByClassName('pitch mi')
    let the_bbs = document.getElementsByClassName('pitch fa')
    let the_cs = document.getElementsByClassName('pitch sol')
    let the_ds = document.getElementsByClassName('pitch la')
    let the_es = document.getElementsByClassName('pitch ti')
    
    for (let x=0; x<the_fs.length; x++){
        the_fs[x].src = SimpleBlkI
        }
    for (let x=0; x<the_gs.length; x++){
        the_gs[x].src = SimpleBlkV7
        }
    for (let x=0; x<the_as.length; x++){
        the_as[x].src = SimpleBlkI
        }
    for (let x=0; x<the_bbs.length; x++){
            the_bbs[x].src = SimpleBlkIV
            }
    for (let x=0; x<the_cs.length; x++){
        the_cs[x].src = SimpleBlkV7
        }
    for (let x=0; x<the_ds.length; x++){
            the_ds[x].src = SimpleBlkIV
            }
    for (let x=0; x<the_es.length; x++){
        the_es[x].src = SimpleBlkV7
        }
    
}


function white_3note_chords() {
    let the_fs = document.getElementsByClassName('pitch do')
    let the_gs = document.getElementsByClassName('pitch re')
    let the_as = document.getElementsByClassName('pitch mi')
    let the_bbs = document.getElementsByClassName('pitch fa')
    let the_cs = document.getElementsByClassName('pitch sol')
    let the_ds = document.getElementsByClassName('pitch la')
    let the_es = document.getElementsByClassName('pitch ti')
    
    for (let x=0; x<the_fs.length; x++){
        the_fs[x].src = FullWhtI
        }
    for (let x=0; x<the_gs.length; x++){
        the_gs[x].src = FullWhtV7
        }
    for (let x=0; x<the_as.length; x++){
        the_as[x].src = FullWhtI
        }
    for (let x=0; x<the_bbs.length; x++){
            the_bbs[x].src = FullWhtIV
            }
    for (let x=0; x<the_cs.length; x++){
        the_cs[x].src = FullWhtV7
        }
    for (let x=0; x<the_ds.length; x++){
            the_ds[x].src = FullWhtIV
            }
    for (let x=0; x<the_es.length; x++){
        the_es[x].src = FullWhtV7
        }
    
}


function black_3note_chords() {
    let the_fs = document.getElementsByClassName('pitch do')
    let the_gs = document.getElementsByClassName('pitch re')
    let the_as = document.getElementsByClassName('pitch mi')
    let the_bbs = document.getElementsByClassName('pitch fa')
    let the_cs = document.getElementsByClassName('pitch sol')
    let the_ds = document.getElementsByClassName('pitch la')
    let the_es = document.getElementsByClassName('pitch ti')
    
    for (let x=0; x<the_fs.length; x++){
        the_fs[x].src = FullBlkI
        }
    for (let x=0; x<the_gs.length; x++){
        the_gs[x].src = FullBlkV7
        }
    for (let x=0; x<the_as.length; x++){
        the_as[x].src = FullBlkI
        }
    for (let x=0; x<the_bbs.length; x++){
            the_bbs[x].src = FullBlkIV
            }
    for (let x=0; x<the_cs.length; x++){
        the_cs[x].src = FullBlkV7
        }
    for (let x=0; x<the_ds.length; x++){
            the_ds[x].src = FullBlkIV
            }
    for (let x=0; x<the_es.length; x++){
        the_es[x].src = FullBlkV7
        }
    
}


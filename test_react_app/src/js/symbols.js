/*
Symbols
Created By: Anne Hamill
Date: 26 July 2022
Description: Hide and display chord symbols, letter names, and any other textual bits of scores.
TODO: Create functions for other score elements?
*/

import React, { useState } from "react";


export function ChordSymbolButton() {
/*
Creates a button which either display or hides a note's chord symbol.
TODO: Send state to parent component? (What is the parent component?)
*/
    //Set the button state.
    let [value, setButton] = useState("chord-button-active");

    //Get the chord class for each note.
    let the_tonics = document.getElementsByClassName('tonic');
    let the_doms = document.getElementsByClassName('dominant');
    let the_subdoms = document.getElementsByClassName('subdominant');
    
    //Change the visibility of each type of chord.
    for (let a=0; a<the_tonics.length; a++) {
        if (the_tonics[a].style.visibility === "" || the_tonics[a].style.visibility === "hidden") {
            the_tonics[a].style.visibility = "visible";
        }
        else {
            the_tonics[a].style.visibility = "hidden";
        }
    }
    
    for (let b=0; b<the_doms.length; b++) {
        if (the_doms[b].style.visibility === "" || the_doms[b].style.visibility === "hidden") {
            the_doms[b].style.visibility = "visible";
        }
        else {
            the_doms[b].style.visibility = "hidden";
        }
    }
    
    for (let c=0; c<the_subdoms.length; c++) {
        if (the_subdoms[c].style.visibility === "" || the_subdoms[c].style.visibility === "hidden") {
            the_subdoms[c].style.visibility = "visible";
        }
        else {
            the_subdoms[c].style.visibility = "hidden";
        }
    }
    
    //Return the actual button. Change the button state and appearance when clicked.
    return (
        <button className={value} onClick={() => setButton(value === "chord-button-active" ? "chord-button-inactive" : "chord-button-active")}> Chord Symbols</button>
    )
}
/*
Symbols
Created By: Anne Hamill
Date: 26 July 2022
Description: Hide and display chord symbols, letter names, and any other textual bits of scores
*/

import React, {useState} from "react";

export function chord_symbols() {
    
    let the_tonics = document.getElementsByClassName('tonic');
    let the_doms = document.getElementsByClassName('dominant');
    let the_subdoms = document.getElementsByClassName('subdominant');
    
    for (let a=0; a<the_tonics.length; a++) {
        if (the_tonics[a].style.visibility === "") {
            the_tonics[a].style.visibility = "visible";
        }
    }
    
    for (let b=0; b<the_doms.length; b++) {
        if (the_doms[b].style.visibility === "") {
            the_doms[b].style.visibility = "visible";
        }
    }
    
    for (let c=0; c<the_subdoms.length; c++) {
        if (the_subdoms[c].style.visibility === "") {
            the_subdoms[c].style.visibility = "visible";
        }
    }
}

/*
function setButton(value) {
    let the_button = document.getElementsByClassName("chord-button2");
    if (value === "inactive") {
        the_button.style.color = "red";
    }
}*/


export function ChordButton() {
    let [value, setButton] = useState("active");
    
    let the_button = document.getElementsByClassName("john");
    
    
    
    if (value === "inactive") {
        console.log(value, the_button.length)
        /*the_button[0].style.color = "red";*/
        the_button.className = 'chord-button-inactive'
        console.log(the_button.className)
    }
    else if (value === "active") {
        the_button.className = 'chord-button-active'
        console.log(value)
        console.log(the_button.className)
    }
    
    let the_tonics = document.getElementsByClassName('tonic');
    let the_doms = document.getElementsByClassName('dominant');
    let the_subdoms = document.getElementsByClassName('subdominant');
    
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
    
    return (
        <button className="john {styles.chord-button-active}" onClick={() => setButton(value === "active" ? "inactive" : "active")}> NEW Chord Symbols</button>
    )
}
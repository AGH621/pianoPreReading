/*
Chord View
Created By: Anne Hamill
Date: 29 May 2022
Description: Change the symbolic notation images from melody notes to chord diagrams.
TODO:
    1) Create a single generalized function which can iterate through different classes and replace different kinds of images.
*/

import SimpleWhtI from "../images/simple_wht_tonic.png";
import SimpleWhtV7 from "../images/simple_wht_dom.png";
import SimpleBlkI from "../images/simple_blk_tonic.png";
import SimpleBlkV7 from "../images/simple_blk_dom.png";

console.log("Chord view is running");


export function white_2note_chords() {
    let white_tonic_block = document.getElementsByClassName('tonic');
    let white_dominant_block = document.getElementsByClassName('dominant');
    
    //Iterate through each tonic block. Locate the melody note image.
    for (let x=0; x<white_tonic_block.length; x++) {
        let wi_img = white_tonic_block[x].querySelectorAll('img.pitch');
    
        //Change it to the tonic chord image.
        for (let y=0; y<wi_img.length; y++) {
            wi_img[y].src = {SimpleWhtI};  
        }   
    }
    
    //Iterate through each dominant block. Locate the melody note image.
    for (let x=0; x<white_dominant_block.length; x++) {
        let wv_img = white_dominant_block[x].querySelectorAll('img.pitch');
    
        //Change it to the dominant chord image.
        for (let y=0; y<wv_img.length; y++) {
            wv_img[y].src = {SimpleWhtV7}; 
        }   
    }
}

export function black_2note_chords() {
    let white_tonic_block = document.getElementsByClassName('tonic');
    let white_dominant_block = document.getElementsByClassName('dominant');

    //Iterate through each tonic block. Locate the melody note image.
    for (let x=0; x<white_tonic_block.length; x++) {
        let wi_img = white_tonic_block[x].querySelectorAll('img.pitch');
    
        //Change it to the tonic chord image.
        for (let y=0; y<wi_img.length; y++) {
            wi_img[y].src = {SimpleBlkI}   
        }   
    }
    
    //Iterate through each dominant block. Locate the melody note image.
    for (let x=0; x<white_dominant_block.length; x++) {
        let wv_img = white_dominant_block[x].querySelectorAll('img.pitch');
    
        //Change it to the dominant chord image.
        for (let y=0; y<wv_img.length; y++) {
            wv_img[y].src = {SimpleBlkV7}  
        }   
    }
}




function xxxwhite_3note_chords(){
    let white_tonic_block = document.getElementsByClassName('tonic');
    let white_dominant_block = document.getElementsByClassName('dominant');
    let finger_num = document.getElementsByClassName('fingerings');
    
    //Make finger numbers disappear.
    for (let a=0; a<finger_num.length; a++) {
        finger_num[a].style.visibility = "hidden";
    }
    
    //Iterate through each tonic block. Locate the melody note image.
    for (let x=0; x<white_tonic_block.length; x++) {
        let wi_img = white_tonic_block[x].querySelectorAll('img.pitch');
    
        //Change it to the tonic chord image.
        for (let y=0; y<wi_img.length; y++) {
            wi_img[y].src = "../../images/pngs/full_wht_tonic.png"    
        }   
    }
    
    //Iterate through each dominant block. Locate the melody note image.
    for (let x=0; x<white_dominant_block.length; x++) {
        let wv_img = white_dominant_block[x].querySelectorAll('img.pitch');
    
        //Change it to the dominant chord image.
        for (let y=0; y<wv_img.length; y++) {
            wv_img[y].src = "../../images/pngs/full_wht_dom.png"    
        }   
    }
}


function xxxblack_3note_chords(){
    let black_tonic_block = document.getElementsByClassName('tonic');
    let black_dominant_block = document.getElementsByClassName('dominant');
    let finger_num = document.getElementsByClassName('fingerings');
    
    //Make finger numbers disappear.
    for (let a=0; a<finger_num.length; a++) {
        finger_num[a].style.visibility = "hidden";
    }
    
    //Iterate through each tonic block. Locate the melody note image.
    for (let x=0; x<black_tonic_block.length; x++) {
        let bi_img = black_tonic_block[x].querySelectorAll('img.pitch');
    
        //Change it to the tonic chord image.
        for (let y=0; y<bi_img.length; y++) {
            bi_img[y].src = "../../images/pngs/full_blk_tonic.png"    
        }   
    }
    
    //Iterate through each dominant block. Locate the melody note image.
    for (let x=0; x<black_dominant_block.length; x++) {
        let bv_img = black_dominant_block[x].querySelectorAll('img.pitch');
    
        //Change it to the dominant chord image.
        for (let y=0; y<bv_img.length; y++) {
            bv_img[y].src = "../../images/pngs/full_blk_dom.png"    
        }   
    }
}


function xxxwhite_2note_chords() {
    let white_tonic_block = document.getElementsByClassName('tonic');
    let white_dominant_block = document.getElementsByClassName('dominant');
    let finger_num = document.getElementsByClassName('fingerings');
    
    
    //Iterate through each tonic block. Locate the melody note image.
    for (let x=0; x<white_tonic_block.length; x++) {
        let wi_img = white_tonic_block[x].querySelectorAll('img.pitch');
    
        //Change it to the tonic chord image.
        for (let y=0; y<wi_img.length; y++) {
            wi_img[y].src = "../../images/pngs/simple_wht_tonic.png"    
        }   
    }
    
    //Iterate through each dominant block. Locate the melody note image.
    for (let x=0; x<white_dominant_block.length; x++) {
        let wv_img = white_dominant_block[x].querySelectorAll('img.pitch');
    
        //Change it to the dominant chord image.
        for (let y=0; y<wv_img.length; y++) {
            wv_img[y].src = "../../images/pngs/simple_wht_dom.png"    
        }   
    }
}

function xxxblack_2note_chords() {
    let white_tonic_block = document.getElementsByClassName('tonic');
    let white_dominant_block = document.getElementsByClassName('dominant');
    let finger_num = document.getElementsByClassName('fingerings');
    
    
    //Iterate through each tonic block. Locate the melody note image.
    for (let x=0; x<white_tonic_block.length; x++) {
        let wi_img = white_tonic_block[x].querySelectorAll('img.pitch');
    
        //Change it to the tonic chord image.
        for (let y=0; y<wi_img.length; y++) {
            wi_img[y].src = "../../images/pngs/simple_blk_tonic.png"    
        }   
    }
    
    //Iterate through each dominant block. Locate the melody note image.
    for (let x=0; x<white_dominant_block.length; x++) {
        let wv_img = white_dominant_block[x].querySelectorAll('img.pitch');
    
        //Change it to the dominant chord image.
        for (let y=0; y<wv_img.length; y++) {
            wv_img[y].src = "../../images/pngs/simple_blk_dom.png"    
        }   
    }
}







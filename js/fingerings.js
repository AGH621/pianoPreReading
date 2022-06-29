/*
Transpose
Created By: Anne Hamill
Date: 18 June 2022
Description: Hide and display finger numbers for each melody note
TODO:
    1) Improve the two functions by figuring how to make the if/else if conditionals into switch statements.
*/

console.log("Fingerings is running");



//Make finger numbers appear.
function left_hand_numbers() {
    let fingerings = document.getElementsByClassName('fingerings');
    for (let a=0; a<fingerings.length; a++) {
        if (fingerings[a].style.visibility === "") {
            fingerings[a].style.visibility = "visible";
            fingerings[a].style.height = '20px';
        }
        
        else { 
            if (fingerings[a].src.endsWith('R5.png')){
                fingerings[a].src = '../../images/pngs/L1.png'
                fingerings[a].style.height = '20px';
                fingerings[a].style.visibility = "visible";
            }
            else if (fingerings[a].src.endsWith('R4.png')){
                fingerings[a].src = '../../images/pngs/L2.png'
                fingerings[a].style.height = '20px';
                fingerings[a].style.visibility = "visible";
            }
            else if (fingerings[a].src.endsWith('R3.png')){
                fingerings[a].src = '../../images/pngs/L3.png'
                fingerings[a].style.height = '20px';
                fingerings[a].style.visibility = "visible";
            }
            else if (fingerings[a].src.endsWith('R2.png')){
                fingerings[a].src = '../../images/pngs/L4.png'
                fingerings[a].style.height = '20px';
                fingerings[a].style.visibility = "visible";
            }
            else if (fingerings[a].src.endsWith('R1.png')){
                fingerings[a].src = '../../images/pngs/L5.png'
                fingerings[a].style.height = '20px';
                fingerings[a].style.visibility = "visible";
            }
        }
    }        
}

//Change left hand finger numbers into right hand ones and make them appear.
function right_hand_numbers() {
    
    let fingerings = document.getElementsByClassName('fingerings');
    for (let a=0; a<fingerings.length; a++) {
        if (fingerings[a].src.endsWith('L1.png')){
            fingerings[a].src = '../../images/pngs/R5.png'
            fingerings[a].style.height = '20px';
            fingerings[a].style.visibility = "visible";
        }
        else if (fingerings[a].src.endsWith('L2.png')){
            fingerings[a].src = '../../images/pngs/R4.png'
            fingerings[a].style.height = '20px';
            fingerings[a].style.visibility = "visible";
        }
        else if (fingerings[a].src.endsWith('L3.png')){
            fingerings[a].src = '../../images/pngs/R3.png'
            fingerings[a].style.height = '20px';
            fingerings[a].style.visibility = "visible";
        }
        else if (fingerings[a].src.endsWith('L4.png')){
            fingerings[a].src = '../../images/pngs/R2.png'
            fingerings[a].style.height = '20px';
            fingerings[a].style.visibility = "visible";
        }
        else if (fingerings[a].src.endsWith('L5.png')){
            fingerings[a].src = '../../images/pngs/R1.png'
            fingerings[a].style.height = '20px';
            fingerings[a].style.visibility = "visible";
        }
    }
}

//Clear all any visible finger numbers
function hide_finger_numbers() {
    let fingerings = document.getElementsByClassName('fingerings');
    for (let z=0; z<fingerings.length; z++) {
        if (fingerings[z].style.visibility = "visible"){
        fingerings[z].style.visibility = "hidden";
        }
    }
}        


//Change left hand finger numbers into the ones for 2-finger chords and make those appear.
function two_note_chord_left_fingers() {
    let white_tonic_block = document.getElementsByClassName('tonic');
    let white_dominant_block = document.getElementsByClassName('dominant');
    
    //Iterate through each tonic block. Locate the fingering image.
    for (let x=0; x<white_tonic_block.length; x++) {
        wi_img = white_tonic_block[x].querySelectorAll('img.fingerings');
        
        //Change it to the tonic chord image.
        for (let y=0; y<wi_img.length; y++) {
            wi_img[y].src = "../../images/pngs/L5-1.png" 
            wi_img[y].style.width = '40px';
            wi_img[y].style.visibility = "visible";   
        }   
    }
    
    //Iterate through each dominant block. Locate the fingering image.
    for (let x=0; x<white_dominant_block.length; x++) {
        wv_img = white_dominant_block[x].querySelectorAll('img.fingerings');
    
        //Change it to the dominant chord image.
        for (let y=0; y<wv_img.length; y++) {
            wv_img[y].src = "../../images/pngs/L2-1.png"
            wv_img[y].style.width = '40px';
            wv_img[y].style.visibility = "visible";   
        }       
    }   
}

function two_note_chord_right_fingers() {
    let white_tonic_block = document.getElementsByClassName('tonic');
    let white_dominant_block = document.getElementsByClassName('dominant');
    
    //Iterate through each tonic block. Locate the fingering image.
    for (let x=0; x<white_tonic_block.length; x++) {
        wi_img = white_tonic_block[x].querySelectorAll('img.fingerings');
        
        //Change it to the tonic chord image.
        for (let y=0; y<wi_img.length; y++) {
            wi_img[y].src = "../../images/pngs/R1-5.png" 
            wi_img[y].style.width = '40px';
            wi_img[y].style.visibility = "visible";   
        }   
    }
    
    //Iterate through each dominant block. Locate the fingering image.
    for (let x=0; x<white_dominant_block.length; x++) {
        wv_img = white_dominant_block[x].querySelectorAll('img.fingerings');
    
        //Change it to the dominant chord image.
        for (let y=0; y<wv_img.length; y++) {
            wv_img[y].src = "../../images/pngs/R4-5.png"
            wv_img[y].style.width = '40px';
            wv_img[y].style.visibility = "visible";   
        }       
    }   
}



//Change left hand finger numbers into the ones for both hands and make those appear.
function both_finger_numbers() {
    let fingerings = document.getElementsByClassName('fingerings');
    for (let a=0; a<fingerings.length; a++) {
        if (fingerings[a].src.endsWith('L1.png') || fingerings[a].src.endsWith('R5.png')){
            fingerings[a].src = '../../images/pngs/R5-L1.png';
            fingerings[a].style.height = '40px';
            fingerings[a].style.visibility = "visible";
        }
        else if (fingerings[a].src.endsWith('L2.png') || fingerings[a].src.endsWith('R4.png')){
            fingerings[a].src = '../../images/pngs/R4-L2.png';
            fingerings[a].style.height = '40px';
            fingerings[a].style.visibility = "visible";
        }
        else if (fingerings[a].src.endsWith('L3.png') || fingerings[a].src.endsWith('R3.png')){
            fingerings[a].src = '../../images/pngs/R3-L3.png';
            fingerings[a].style.height = '40px';
            fingerings[a].style.visibility = "visible";
        }
        else if (fingerings[a].src.endsWith('L4.png') || fingerings[a].src.endsWith('R2.png')){
            fingerings[a].src = '../../images/pngs/R2-L4.png';
            fingerings[a].style.height = '40px';
            fingerings[a].style.visibility = "visible";
        }
        else if (fingerings[a].src.endsWith('L5.png') || fingerings[a].src.endsWith('R1.png')){
            fingerings[a].src = '../../images/pngs/R1-L5.png';
            fingerings[a].style.height = '40px';
            fingerings[a].style.visibility = "visible";
        }
    }
}









    
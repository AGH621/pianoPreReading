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
    console.log("i work")
}

//Change left hand finger numbers into the ones for chords and make those appear.
function chord_finger_numbers() {
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









    
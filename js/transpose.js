/*
Transpose
Created By: Anne Hamill
Date: 29 May 2022
Description: Change the symbolic notation images from white key melody to black key and vice versa.
TODO:
    1) Improve the two functions by figuring how to make the if/else if conditionals into switch statements.
    2) Create a single generalized function which can iterate through different classes and replace different kinds of images.
*/



console.log("Transponse is running");

let pitches = document.getElementsByClassName('pitch')

function black_transpose() {
    for (let x=0; x<pitches.length; x++){
        if (pitches[x].src.endsWith('f.png')){
            console.log(pitches[x].src)
            pitches[x].src = "../../images/pngs/single_f_sharp.png"
        }
    
        else if (pitches[x].src.endsWith('g.png')){
            console.log(pitches[x].src)
            pitches[x].src = "../../images/pngs/single_g_sharp.png"
        }
    
        else if (pitches[x].src.endsWith('a.png')){
            console.log(pitches[x].src)
            pitches[x].src = "../../images/pngs/single_a_sharp.png"
        }
    
        else if (pitches[x].src.endsWith('c.png')){
            console.log(pitches[x].src)
            pitches[x].src = "../../images/pngs/single_c_sharp.png"
        }
    }
}

function white_transpose() {
    for (let x=0; x<pitches.length; x++){
        if (pitches[x].src.endsWith('f_sharp.png')){
            console.log(pitches[x].src)
            pitches[x].src = "../../images/pngs/single_f.png"
        }
    
        else if (pitches[x].src.endsWith('g_sharp.png')){
            console.log(pitches[x].src)
            pitches[x].src = "../../images/pngs/single_g.png"
        }
    
        else if (pitches[x].src.endsWith('a_sharp.png')){
            console.log(pitches[x].src)
            pitches[x].src = "../../images/pngs/single_a.png"
        }
    
        else if (pitches[x].src.endsWith('c_sharp.png')){
            console.log(pitches[x].src)
            pitches[x].src = "../../images/pngs/single_c.png"
        }
    }
}


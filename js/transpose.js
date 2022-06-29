/*
Transpose
Created By: Anne Hamill
Date: 29 May 2022
Description: Change the symbolic notation images from white key melody to black key and vice versa.
TODO:
    1) Improve the two functions by figuring how to make the if/else if conditionals into switch statements.
*/

console.log("Transponse is running");

//let pitches = document.getElementsByClassName('pitch')


//console.log(pitches)

//console.log(document.getElementsByClassName('pitch f'))

function black_transpose() {
    let the_fs = document.getElementsByClassName('pitch do')
    let the_gs = document.getElementsByClassName('pitch re')
    let the_as = document.getElementsByClassName('pitch mi')
    let the_cs = document.getElementsByClassName('pitch sol')
    
    for (let x=0; x<the_fs.length; x++){
        the_fs[x].src = "../../images/pngs/single_f_sharp.png"
        }
    for (let x=0; x<the_gs.length; x++){
        the_gs[x].src = "../../images/pngs/single_g_sharp.png"
        }
    for (let x=0; x<the_as.length; x++){
        the_as[x].src = "../../images/pngs/single_a_sharp.png"
        }
    for (let x=0; x<the_cs.length; x++){
        the_cs[x].src = "../../images/pngs/single_c_sharp.png"
        }
}


function white_transpose() {
    let the_fsharps = document.getElementsByClassName('pitch do')
    let the_gsharps = document.getElementsByClassName('pitch re')
    let the_asharps = document.getElementsByClassName('pitch mi')
    let the_csharps = document.getElementsByClassName('pitch sol')
    
    for (let x=0; x<the_fsharps.length; x++){
        the_fsharps[x].src = "../../images/pngs/single_f.png"
        }
    for (let x=0; x<the_gsharps.length; x++){
        the_gsharps[x].src = "../../images/pngs/single_g.png"
        }
    for (let x=0; x<the_asharps.length; x++){
        the_asharps[x].src = "../../images/pngs/single_a.png"
        }
    for (let x=0; x<the_csharps.length; x++){
        the_csharps[x].src = "../../images/pngs/single_c.png"
        }
}



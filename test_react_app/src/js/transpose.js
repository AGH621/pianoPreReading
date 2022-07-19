/*
Transpose
Created By: Anne Hamill
Date: 29 May 2022
Description: Change the symbolic notation images from white key melody to black key and vice versa.
TODO:
    1) Improve the two functions by figuring how to make the if/else if conditionals into switch statements.
*/

// import black key notes
import SingleAsharp from "../images/single_a_sharp.png";
import SingleGsharp from "../images/single_g_sharp.png";
import SingleFsharp from "../images/single_f_sharp.png";
import SingleCsharp from "../images/single_c_sharp.png";
import SingleDsharp from "../images/single_d_sharp.png";
import SingleBflat from "../images/single_a_sharp.png";

//import white key notes
import SingleA from "../images/single_a.png";
import SingleG from "../images/single_g.png";
import SingleF from "../images/single_f.png";
import SingleC from "../images/single_c.png";
import SingleD from "../images/single_d.png";
import SingleB from "../images/single_b.png";


export function black_transpose() {
    let the_fs = document.getElementsByClassName('pitch do')
    let the_gs = document.getElementsByClassName('pitch re')
    let the_as = document.getElementsByClassName('pitch mi')
    let the_cs = document.getElementsByClassName('pitch sol')
    
    for (let x=0; x<the_fs.length; x++){
        the_fs[x].src = SingleFsharp
        }
    for (let x=0; x<the_gs.length; x++){
        the_gs[x].src = SingleGsharp
        }
    for (let x=0; x<the_as.length; x++){
        the_as[x].src = SingleAsharp
        }
    for (let x=0; x<the_cs.length; x++){
        the_cs[x].src = SingleCsharp
        }
}


export function white_transpose() {
    let the_fsharps = document.getElementsByClassName('pitch do')
    let the_gsharps = document.getElementsByClassName('pitch re')
    let the_asharps = document.getElementsByClassName('pitch mi')
    let the_csharps = document.getElementsByClassName('pitch sol')
    
    for (let x=0; x<the_fsharps.length; x++){
        the_fsharps[x].src = SingleF
        }
    for (let x=0; x<the_gsharps.length; x++){
        the_gsharps[x].src = SingleG
        }
    for (let x=0; x<the_asharps.length; x++){
        the_asharps[x].src = SingleA
        }
    for (let x=0; x<the_csharps.length; x++){
        the_csharps[x].src = SingleC
        }
}



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
import SimpleWhtIV from "../images/simple_wht_subdom.png";
import SimpleBlkI from "../images/simple_blk_tonic.png";
import SimpleBlkV7 from "../images/simple_blk_dom.png";
import SimpleBlkIV from "../images/simple_blk_subdom.png";


import FullWhtI from "../images/full_wht_tonic.png";
import FullWhtV7 from "../images/full_wht_dom.png";
import FullWhtIV from "../images/full_wht_subdom.png";
import FullBlkI from "../images/full_blk_tonic.png";
import FullBlkV7 from "../images/full_blk_dom.png";
import FullBlkIV from "../images/full_blk_subdom.png";


console.log("Chord view is running");


export function white_2note_chords() {
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

export function black_2note_chords() {
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



export function white_3note_chords() {
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

export function black_3note_chords() {
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










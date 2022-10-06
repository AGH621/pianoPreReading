/*
Transpose
Created By: Anne Hamill
Date: 29 May 2022
Description: Change the symbolic notation images from white key melody to black key and vice versa.
TODO: Improve the two functions by figuring how to make the if/else if conditionals into switch statements.
*/

//External imports
import React, { useState } from "react";

import { Divider, 
         Paper,
         Radio,
         ThemeProvider,
         Typography } from "@mui/material";

//Internal imports
import { theme } from '../siteTheme.js';

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


export function ThreeNoteRadioButtons() {
/*
Return a group of two radio buttons to change the melody from black keys to white keys.
handleChange() controls each button's state and appearance.
onClick() changes the notes appearing on the screen.
*/
    //Set the buttons states.
      const [selectedValue, setSelectedValue] = React.useState('a');

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
      };
    
    //React component to go export to the song page.
    return(
        <ThemeProvider theme={theme}>
            <Typography variant="h5" color="secondary.dark">
                Melody
            </Typography>
            <div>
                <Radio checked={selectedValue === 'a'} value="a" defaultChecked onChange={handleChange} onClick={white_transpose} />
                <span> White Key </span>
            </div>
        
            <div>
                <Radio checked={selectedValue === 'b'} value="b" onChange={handleChange} onClick={black_transpose} />
                <span> Black Key</span>
            </div>
        
            <Divider sx={{marginLeft: "-0.5em",
                          marginRight: "0.5em",
                          marginTop: "0.5em",
                          marginBottom: "0.5em"}}/>
        
            <Typography variant="h5" color="secondary.dark">
                2-Note Chords
            </Typography>
        
            <div>
                <Radio checked={selectedValue === 'c'} value="c" defaultChecked onChange={handleChange} onClick={white_2note_chords} />
                <span> White Key </span>
            </div>
        
            <div>
                <Radio checked={selectedValue === 'd'} value="d" defaultChecked onChange={handleChange} onClick={black_2note_chords} />
                <span> Black Key </span>
            </div>
        </ThemeProvider>
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
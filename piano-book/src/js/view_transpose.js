/*
Transpose
Created By: Anne Hamill
Date: 29 May 2022
Version: 3.0
Description: Change the symbolic notation images.
TODO: Redesign to adhere to DRY principles, both within this module and between the other view modules.
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
import { black_transpose,
         white_transpose,
         white_2note_chords,
         black_2note_chords,
         white_3note_chords,
         black_3note_chords, } from './transpose_funct.js';

//Import black key diagrams
import SingleAsharp from "../images/notes_key_diagram/single_a_sharp.png";
import SingleGsharp from "../images/notes_key_diagram/single_g_sharp.png";
import SingleFsharp from "../images/notes_key_diagram/single_f_sharp.png";
import SingleCsharp from "../images/notes_key_diagram/single_c_sharp.png";
import SingleDsharp from "../images/notes_key_diagram/single_d_sharp.png";

//Import white key diagrams
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


export function TransposeRadioButtons() {
/*
Return a group of two radio buttons to change the melody from black keys to white keys.
handleChange() controls each button's state and appearance.
onClick() changes the notes appearing on the screen.
*/
    //Set the buttons states.
    const [selectedValue, setSelectedValue] = React.useState('a');

    //Change the notes based on which radio button is clicked.
    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
      setSelectedValue(event.target.value);

      switch(event.target.value) {
          case 'a':
              white_transpose()
              break;
          case 'b':
              black_transpose()
              break;
          case 'c':
              white_2note_chords()
              break;
          case 'd':
              black_2note_chords()
              break;
          case 'e':
              white_3note_chords()
              break;
          case 'f':
              black_3note_chords()
              break;
      }
    };
    
    //React component to go export to the song page.
    return(
        <ThemeProvider theme={theme}>
            <Typography variant="h5" color="secondary.dark">
                Melody
            </Typography>
            <div>
                <Radio checked={selectedValue === 'a'} value="a" onChange={handleChange} />
                <span> White Key </span>
            </div>
        
            <div>
                <Radio checked={selectedValue === 'b'} value="b" onChange={handleChange} />
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
                <Radio checked={selectedValue === 'c'} value="c" defaultChecked onChange={handleChange} />
                <span> White Key </span>
            </div>
        
            <div>
                <Radio checked={selectedValue === 'd'} value="d" defaultChecked onChange={handleChange} />
                <span> Black Key </span>
            </div>
            
            <Divider sx={{marginLeft: "-0.5em",
                          marginRight: "0.5em",
                          marginTop: "0.5em",
                          marginBottom: "0.5em"}}/>
        
            <Typography variant="h5" color="secondary.dark">
                3-Note Chords
            </Typography>
        
            <div>
                <Radio checked={selectedValue === 'e'} value="e" defaultChecked onChange={handleChange} />
                <span> White Key </span>
            </div>
        
            <div>
                <Radio checked={selectedValue === 'f'} value="f" defaultChecked onChange={handleChange} />
                <span> Black Key </span>
            </div>
        </ThemeProvider>
    )
}   

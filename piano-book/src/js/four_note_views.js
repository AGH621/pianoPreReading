/*
Four Note Views
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
         white_3note_chords,
         black_3note_chords, } from './transpose_funct.js';


export function FourNoteRadioButtons() {
/*
    Return a group of two radio buttons to change the melody from black keys to white keys and the melody to chords.
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
                white_3note_chords()
                break;
            case 'd':
                black_3note_chords()
                break;
        }
      };

    //Render the drawer.
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
                3-Note Chords
            </Typography>

            <div>
                <Radio checked={selectedValue === 'c'} value="c" defaultChecked onChange={handleChange} />
                <span> White Key </span>
            </div>

            <div>
                <Radio checked={selectedValue === 'd'} value="d" defaultChecked onChange={handleChange} />
                <span> Black Key </span>
            </div>
        </ThemeProvider>
    )
}
/*
Floating Button
Created by: Anne Hamill
Created on: 25 August 2022
Version: 3.0
Description: A button that floats at the bottom of the page and returns the
user to the top of the page when clicked.
*/

//Export imports
import * as React from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function returnTopFab () {
    return (
        <Fab href="#top" color="primary" aria-label="Return to top"
        sx={{
            margin: 0,
            top: "auto",
            right: 30,
            bottom: 50,
            left: "auto",
            position: "fixed"
        }}>
           <KeyboardArrowUpIcon />
        </Fab>
    );
}
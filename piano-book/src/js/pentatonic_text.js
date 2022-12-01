/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 3.0
Description: Text for the diatonic page. 
*/

//External imports
import React from "react";
import { Box,
         Typography
        } from "@mui/material";

//Internal imports
import { theme } from '../siteTheme.js';

export function teacherTextPent() {
/*
    Teacher accordian text.
*/
    return (
        <Box>
        <Typography variant="accordHead">
            Who is this unit for?
        </Typography>
        
        <Typography paragraph sx={{marginBottom: '2em'}}>
            This unit is for students who have mastered at least six pieces from the 3 Note unit.  
        </Typography>
        
        <Typography variant="accordHead">
            How do I teach this unit?
        </Typography>
        
        <Typography paragraph sx={{marginTop: '-1em',
                                   marginLeft: '-0.75em'}}>
            <ol>
            <li>Introduce the new note and finger numbers (if desired)</li>
            <li>Have students play the melody with each hand separately</li>
            <li>Play the melody with both hands together</li>
            <li>Play the melody in G and C positions with both hands</li>
            <li>Introduce how to play the full tonic (I) and dominant (V7) chords. </li>
            <li>Play only the chords with both hands together</li>
            <li>Play the chords with one hand and the melody with the other. 
                Make sure both hands get a chance to play the melody.</li>
            </ol>
        </Typography>
        </Box>
    );
}

export function studentTextPent() {
/*
    Student accordian text.
*/
    return (
        <Box>
        <Typography variant="accordHead">If you are the parent of a young student</Typography>
        
        <Typography paragraph sx={{marginTop: '-1em',
                                   marginLeft: '-0.75em'}}>
            <ul>
            <li>If you have a teacher, ask them how to best assist your child with their practice.</li>
            <li>If you are teaching your child, look at the "For Teachers" advice above to find out 
            about the teaching sequence for this unit.</li>
            </ul>
        </Typography>
        
        <Typography variant="accordHead">If you want to learn piano yourself or are teaching an older child</Typography>
        
        <Typography paragraph> 
            I would recommend starting with the 5 Finger unit and use the rhythmic notation
        </Typography>
        </Box>
    );
}
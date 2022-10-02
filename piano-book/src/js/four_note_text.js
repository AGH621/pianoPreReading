import React from "react";
import { Box,
         Typography
        } from "@mui/material";
import { theme } from '../siteTheme.js';

export function teacherTextFour() {
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

export function studentTextFour() {
    return (
        <Box>
        <Typography variant="accordHead">If your child is taking lessons</Typography>
        <Typography paragraph>
            If you have not set up a regular practice time with your child, do so today! Behind every successful
            piano student is a parent who provides the structures and support necessary to succeed.  If you already 
            have an established practice time, think about extending it 5 minutes.
        </Typography> 
        <Typography paragraph sx={{marginBottom: '2em'}}>
            Even if your teacher has not assigned them, ask your child to play the 3-Note songs. Not only as written
            but ask your child to think of new ways to play them.  Backwards, upside down, with hands crossed, anywhere
            on the keyboard.  The possibilities are limitless!  Some of the ways your child will think of will sound terrible,
            but stay positive and encourage their efforts.  This is the first step towards improvisation and composition.
        </Typography>
        
        <Typography variant="accordHead">If you are teaching your child</Typography>
        <Typography paragraph>
        Review all the information on this page and make sure you understand it yourself. Play through all the songs with:
            <ol>
            <li>both hands playing the melody on the black keys and white keys</li>
            <li>both hands playing the melody in C and G positions</li>
            <li>one hand playing the melody, and the other playing the chords (don&#39;t forget to switch hands!)
            in all the places listed above.
            </li>
            </ol>
        </Typography>
        <Typography paragraph>
            Follow the teaching sequence in the "For Teachers" section above.
        </Typography>
        </Box>
    );
}
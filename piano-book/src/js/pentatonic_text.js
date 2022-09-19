import React from "react";
import { Box,
         Typography
        } from "@mui/material";

export function teacherTextPent() {
    return (
        <Box>
        <Typography variant="h4">
            Who is this unit for?
        </Typography>
        
        <Typography paragraph>
            This unit is for students who have mastered at least six pieces from the 3 Note unit.  
        </Typography>
        
        <Typography variant="h4">
            How do I teach this unit?
        </Typography>
        
        <Typography paragraph>
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
    return (
        <Box>
        <Typography variant="h4">If you are the parent of a young student</Typography>
        <Typography paragraph>
            <ul>
            <li>If you have a teacher, ask them how to best assist your child with their practice.</li>
            <li>If you are teaching your child, look at the "For Teachers" advice above to find out 
            about the teaching sequence for this unit.</li>
            </ul></Typography>
        <Typography variant="h4">If you want to learn piano yourself or are teaching an older child</Typography>
            <Typography paragraph> I would recommend starting with the 5 Finger unit and use the rhythmic notation</Typography>
        </Box>
    );
}
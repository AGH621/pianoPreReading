import React from "react";
import { Box,
         Typography
        } from "@mui/material";

export function teacherTextThree() {
    return (
        <Box>
        <Typography variant="h4">
            Who is this unit for?
        </Typography>
        
        <Typography paragraph>
            This unit is for your youngest students who cannot read music and maybe learning to read at school.
            Older students should start out by reading standard notation.  Use this unit if your student is working on
            the primer level of any mainstream method book.
        </Typography>
        
        <Typography variant="h4">
            How do I teach this unit?
        </Typography>
        
        <Typography paragraph>
            <ol>
            <li>Show your student how the keyboard diagrams work</li>
            <li>Have them play the melody with each hand separately</li>
            <li>Play the melody with both hands together</li>
            <li>Introduce how to play the tonic (I) and dominant (V7) chords with two fingers. 
            This may take awhile, so it can be introduced while different melodies are learned.</li>
            <li>Play the chords with each hand separately</li>
            <li>Play only the chords with both hands together</li>
            <li>Try playing the chords with one hand and the melody with the other.
            Again, this may take some time to achieve. Go one note at a time.</li>
            </ol>
        </Typography>
        </Box>
    );
}

export function studentTextThree() {
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
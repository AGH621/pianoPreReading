import React from "react";
import { Box,
         Typography
        } from "@mui/material";

export function teacherTextHome() {
    return (
        <Box>
        <Typography paragraph>
            Traditionally there is a gap in piano pedagogy between when a young child starts to learn piano and when he/she knows enough 
            music notation to play real songs.  It can be a frustrating time for the student (and their parents) because he/she wants to 
            play real music, but has not acquired the skills to do so.  The purpose of this book is to fill this gap.  By using pictoral 
            notation (showing which notes to press with colored keys) and songs with an extremely limited ranged, even students in their 
            first week of lessons can play authentic melodies successfully.
        </Typography>
        </Box>
    );
}

export function studentTextHome() {
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
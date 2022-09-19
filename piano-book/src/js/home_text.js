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
        <Typography paragraph>
            There is no substitute for a piano teacher who can listen and watch your child play, and tailor instruction to them.  For 
            this reason I recommend using this book in junction with live lessons. Support your child by listening to them practice, 
            while following along with the symbolic notation of the songs. You might want to play the songs along with your child or have 
            them teach you how to play!
        </Typography>
        <Typography paragraph>
            It is possible to use this book without a teacher. Be sure to read each unit page carefully, making sure you understand what 
            is to be learned before working with your child.  Also read the "For Teachers" sections to pick up any hints and tricks for 
            teaching the material.  Play through the songs you intend your child to learn, making sure you can play them yourself before 
            assigning them.
        </Typography>
        </Box>
    );
}
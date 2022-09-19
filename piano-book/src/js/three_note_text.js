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
            This unit is for your youngest students who are taking their first piano lessons.
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
            This may take awhile, so it can be introduced while they learn different songs.</li>
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
        <Typography variant="h4">If your child is taking lessons</Typography>
        <Typography paragraph>
            Over the years, I have found that my most successful students are the ones with parents who 
            are active in the practice process. They set up a specific practice time for their children
            and make sure practice happens at that time.
        </Typography> 
        <Typography paragraph>
            For these songs, sit with your child and follow along with the song. Watch to see that your
            child his striking the correct keys and holding them down when there are arrows.  If your teacher
            has set specific goals or targets for your child, check to be sure your child is trying his/her 
            best to achieve them. Do not be afraid to ask your child&#39;s teacher for more suggestions on how 
            you can help.
        </Typography>
        <Typography variant="h4">If you are teaching your child</Typography>
        <Typography paragraph>
            Review all the information on this page and make sure you understand it yourself. Play through all the 
        songs with:
            <ol>
            <li>both hands playing the melody</li>
            <li>both hands playing the chords</li>
            <li>one hand playing the melody, and the other playing the chords (don&#39;t forget to switch hands!)</li>
            </ol>
        </Typography>
        <Typography paragraph>
            Follow the teaching sequence in the "For Teachers" section above.
        </Typography>
        
        </Box>
    );
}
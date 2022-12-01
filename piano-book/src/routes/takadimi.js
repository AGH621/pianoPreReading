/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 3.0
Description: About page React component. 
*/

//External imports.
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Typography,
         Grid,
         Box,
         Paper,
         ThemeProvider } from '@mui/material';

//Internal imports.
import { theme } from '../siteTheme.js'
import Footer from '../components/footer';

//Data imports.
import lesson1 from '../data/takadimi_files/Lesson_1.pdf';
import lesson2 from '../data/takadimi_files/Lesson_2.pdf';
import lesson3 from '../data/takadimi_files/Lesson_3.pdf';
import lesson4 from '../data/takadimi_files/Lesson_4.pdf';
import lesson5 from '../data/takadimi_files/Lesson_5.pdf';
import lesson6 from '../data/takadimi_files/Lesson_6.pdf';


export default function Takadimi() {
    return (
            <ThemeProvider theme={theme}>
                <Paper sx={{backgroundColor: "backgrounds.nav"}}>
                    <Box sx={{padding: "5em",}}>
                        
                        <Typography variant="h1" sx={{textAlign: "left"}}>Takadimi Counting Lessons</Typography>
        
                        <Typography paragraph sx={{marginTop: "1em"}}>
                            These are a set of lessons I created several years ago in order to teach my private students to
                            count rhythms using the <a href="http://www.takadimi.net/basics.html">takadimi</a> system.
                            I am including them here because they were somewhat popular back when I sold them (and the Piano 
                            PreReading Book) on Teachers Pay Teachers.  Someday, I may add more lessons.
                            <br />
                            <br />
                            Each lesson has a brief explanation of the concept, beginning and advanced counting exercises, and 
                            a composition activity.
                        </Typography>
                                
                        <Typography variant="h2" color="secondary.dark" sx={{marginBottom: "0.25em",
                                                                             marginTop: "0.5em"}}>
                                Lesson Summaries
                        </Typography>
                                
                        <Typography variant="h3" color="secondary.dark" sx={{marginLeft: "1em"}}>
                                Lesson 1 
                        </Typography>
                        
                        <Typography paragraph sx={{marginLeft: "1.5em",
                                                   marginBottom: "2em"}}>
                                Introduction to whole, half, quarter and eighth notes and how to count them.
                                <br />
                                <a href={lesson1} target="_blank" rel="noreferrer">(Download)</a>
                        </Typography>
                                
                                
                        <Typography variant="h3" color="secondary.dark" sx={{marginLeft: "1em"}}>
                                Lesson 2 
                        </Typography>
                        
                        <Typography paragraph sx={{marginLeft: "1.5em",
                                                   marginBottom: "2em"}}>
                                Measure notes against a string of eighth notes to know where it lies within the beat
                                and what syllable to use for counting.
                                <br />
                                <a href={lesson2} target="_blank" rel="noreferrer">(Download)</a>
                        </Typography>
                        
                        <Typography variant="h3" color="secondary.dark" sx={{marginLeft: "1em"}}>
                                Lesson 3 
                        </Typography>
                        
                        <Typography paragraph sx={{marginLeft: "1.5em",
                                                   marginBottom: "2em"}}>
                                Ties.  What they do and how they change the counting syllables.
                                <br />
                                <a href={lesson3} target="_blank" rel="noreferrer">(Download)</a>
                        </Typography>
                        
                        <Typography variant="h3" color="secondary.dark" sx={{marginLeft: "1em"}}>
                                Lesson 4 
                        </Typography>
                        
                        <Typography paragraph sx={{marginLeft: "1.5em",
                                                   marginBottom: "2em"}}>
                                Looks different, sounds the same.  Compare notes using tie which count the 
                                same as a non-tied note.
                                <br />
                                <a href={lesson4} target="_blank" rel="noreferrer">(Download)</a>
                        </Typography>
                        
                        <Typography variant="h3" color="secondary.dark" sx={{marginLeft: "1em"}}>
                                Lesson 5 
                        </Typography>
                        
                        <Typography paragraph sx={{marginLeft: "1.5em",
                                                   marginBottom: "2em"}}>
                                Introduce whole, half, quarter and eighth rests.
                                <br />
                                <a href={lesson5} target="_blank" rel="noreferrer">(Download)</a>
                        </Typography>
                        
                        <Typography variant="h3" color="secondary.dark" sx={{marginLeft: "1em"}}>
                                Lesson 6 
                        </Typography>
                        
                        <Typography paragraph sx={{marginLeft: "1.5em",
                                                   marginBottom: "2em"}}>
                                How rests are different than notes in terms of appearance and ties.
                                <br />
                                <a href={lesson6} target="_blank" rel="noreferrer">(Download)</a>
                        </Typography>
                        
                    </Box>
                    
                    <Footer />
                    
                    <Outlet />
                </Paper>
            </ThemeProvider>  
        );
}

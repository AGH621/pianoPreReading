/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 0.4
Description: About page React component. 
*/

//External imports
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Typography, 
         Box,
         ThemeProvider,
         Paper } from '@mui/material';

//Internal imports
import Footer from '../components/footer';
import { theme } from '../siteTheme.js'

//Our About page
export default function About() {
    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{backgroundColor: "backgrounds.nav"}}>
                <Box sx={{padding: "5em"}}>
                    <Typography variant="h1" sx={{textAlign: 'center',
                                                  paddingBottom: '0.25em'}}>
                        About This Project
                    </Typography>

                    <Typography variant="body1" sx={{textAlign: 'center',}}>
                        Hi There!  I&#39;m Anne Hamill.  Welcome to my first web-development project.  If you would like 
                        to know more, please  <a class="in-link" href="mailto: saxmusicology@gmail.com">get in touch</a>
                    </Typography>
            
                    <Typography variant="h2" color="secondary.dark" sx={{paddingTop: '0.75em'}}>
                        My Background
                    </Typography>
        
                    <Typography variant="body1">
                        <p> For the last 20-ish years, I have been a music teacher in public schools, private schools, and in my own studio.  
                        My students range from 5 years of age all the way to adults whose children have grown up.  In schools, I have taught 
                        band, orchestra, choir, general music, guitar, theory, piano, and computer music.  In my studio, I have had students 
                        learning orchestral strings, guitar, piano, woodwinds and brass.</p>

                        <p>Throughout the course of my school teaching, I have been required to write my own curriculum, 
                        becoming fascinated with course design along the way.  I have mentored others in writing their 
                        own elementary music curriculum, and currently hold the position of Director of Curriculum and Associated Technology 
                        at  <a href="https://mfm.org/" target="_blank">Music for Minors</a> where I write lessons for about 40 elementary music teachers.</p>

                        <p>Lately I have become interested in computer programming and website development.  
                        This site is my first foray into combining my first love, music, with my new love, programming.</p>
                    </Typography>
                
                    <Typography variant="h2" color="secondary.dark" sx={{paddingTop: '0.75em'}}>
                        Project History
                    </Typography>
                
                    <Typography variant="body1">
                        <p>This is actually PreReading Piano Book 2.0.  Version 1.0 was created in 2013 when I grew frustrated with the piano method book
                         series I use with young students.  All students, especially the young ones, want to play songs, and can tell the difference between 
                        real ones, and those written as exercises in piano method books.  Problem is, these young students cannot read standard music notation 
                        yet.  So, I transcribed some 3-note folksongs commonly sung in elementary music classes into graphic notation.  The key to be played 
                        is colored and the arrows show long a key should be depressed.  I ended up with 12 songs: 6 in duple meter, 6 in triple meter.  Soon I 
                        made a set of 4-note songs, then pentatonic, then diatonic.  Each set adding elements of standard notation.  Even though they were 
                        printed on 11x17 paper and unweildly, my students loved them!</p>
                    </Typography>
       
                    <Typography variant="h2" color="secondary.dark" sx={{paddingTop: '0.75em'}}>
                        Technical Details
                    </Typography>
        
                    <Typography variant="body1">
                        <ul>
                            <li>
                                <Typography variant="h3" color="secondary" sx={{marginLeft: '0.5em',}}>
                                    Phase 1: The beginning!
                                </Typography>
                        
                                <ul>
                                    <li>Recover the keyboard diagrams image files used in the paper version</li>
                                    <li>Design the site</li>
                                    <li>Build the site using plain, handcrafted HTML and CSS</li>
                                </ul>
                            </li>
                            <li>
                                <Typography variant="h3" color="secondary" sx={{marginLeft: '0.5em',
                                                                                marginTop: '0.5em'}}>
                                    Phase 2: Interactivity
                                </Typography>
                        
                                <ul>
                                    <li>Design the song view functionality</li>
                                    <li>Learn Javascript.</li>
                                    <li>Program the song view buttons.</li>
                                </ul>
                            </li>
                            <li>
                                <Typography variant="h3" color="secondary" sx={{marginLeft: '0.5em',
                                                                                marginTop: '0.5em'}}>
                                    Phase 3: React
                                </Typography>
                                
                                <ul>
                                    <li>Become frustrated with manually entered HTML and CSS</li>
                                    <li>Learn React</li>
                                    <li>Redesign the site based on React design principles (using Figma)</li>
                                    <li>Implement the design</li>
                                </ul>
                            </li>
                            <li><Typography variant="h3" color="secondary" sx={{marginLeft: '0.5em',
                                                                                marginTop: '0.5em'}}>
                                    Phase 4: Material UI
                                </Typography>
                        
                                <ul>
                                    <li>Become frustrated with the persnicking nature of programming React components</li>
                                    <li>Stumble upon the Material UI library and experiment with it</li>
                                    <li>Implement MUI throughout the entire site</li>
                                </ul>
                            </li>
                        </ul>
                    </Typography>
                </Box>
                        
                <Footer />
                        
                <Outlet />
            </Paper>
        </ThemeProvider>        
    );
}
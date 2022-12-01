/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 3.0
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
                        Project Specifics
                    </Typography>
                
                    <Typography variant="h3" color="secondary.dark" sx={{paddingTop: '0.5em'}}>
                        Why did we undertake this project?
                    </Typography>
                    <Typography variant="body1">
                        <p>
                        I thought up the concept for this book back in about 2012, having grown frustrated with the method book series I use to teach
                        young kids.  All students, especially the young ones, want to play songs, and can tell the difference between 
                        real ones and those written as exercises in piano method books.  Problem is, these young students cannot read standard music 
                        notation yet.  So, I transcribed some 3-note folksongs commonly sung in elementary music classes into graphic notation and printed
                        them on 11x17 paper.  They were so well liked, I made sets of 4-note, pentatonic and diatonic songs.
                        </p>
                        <p>
                        Fast forward about 10 years when I was trying to balance these 11x17 papers on the rickety music rack of a student&#145;s piano 
                        keyboard. It would be so much better if the entire collection was digital!  No more juggling papers which quickly get rumpled. 
                        Even better, the songs would be updatable and easily distributed to a much wider audience. I could even code it myself.
                        </p>
                    </Typography>
                    <Typography variant="h3" color="secondary.dark" sx={{paddingTop:'1em'}}>
                        What are our goals?
                    </Typography>
                    <Typography variant="body1">
                        <p>
                        I have several goals for this project, both pedagogically and technically.  
                        </p>
                        <p>
                        Pedagogically, the first goal is to recreate the paper piano song book I wrote 10+ years ago, containing 4 units each growing 
                        steadily more complex melodically, harmonically, and notationally. Secondly I would like to expand the book to include two additional 
                        units, allowing students to seque smoothly to reading leadsheets upon completion. 
                        </p>
                        <p>
                        Technically, my goal is to learn frontend web development to expand my skillset beyond Python.
                        </p>
                    </Typography>
                    <Typography variant="h3" color="secondary.dark" sx={{paddingTop:'1em'}}>
                        How did we create this site?
                    </Typography>
                    <Typography variant="body1">
                        <ol>
                        <li>
                            <b>Backend</b>
                            <p>The backend was written by a friend who offered to collaborate with me. It starts out with my score library, which consists 
                            of about 1200 <a href="https://www.musicxml.com/">MusicXML</a> scores.  A filtering mechanism was written based the pedagogical requirements (range, key, meter,
                            and note values) of each section. The program (written in  <a href="https://www.python.org/">
                            Python 3.10</a>) uses the <a href="http://web.mit.edu/music21/doc/about/about.html">Music21</a> library as a foundation for searching each score for the presence 
                            of each requirement. Songs that match all of a section&#39;s requirements are added to a <a href="https://docs.fileformat.com/web/json/">JSON</a> object 
                            which is passed to the frontend.
                            </p>
                            
                        </li>
                        <br />
                        <li>
                            <b>Frontend</b>
                            <p>I take the <a href="https://docs.fileformat.com/web/json/">JSON</a> file with all the scores for the book (currently about 100) and use frontend web development tools to make them easily
                            readable for both teachers and students.  These tools allow us to go beyond the printed page. Basic <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                             CSS</a> form the foundation of functionality. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a> gives the ability 
                             to see each song in a different way, so teachers can assign songs on black keys or white keys, and student know exactly what to play. Song 
                             pages are created dynamically, using a <a href="https://reactjs.org/">React</a> template which gives the melodies a unified appearance, 
                             but are displayed in a way that makes sense musically. The polished navigation and layout, which are expected of modern websites, is provided 
                             through the <a href="https://mui.com/">Material UI</a> library.
                             </p>
                             <p>The frontend code is available in a public repository on <a href="https://github.com/AGH621/pianoPreReading">Github</a>.</p>
                        </li>
                        </ol>
                    </Typography>
                    
                </Box>
                        
                <Footer />
                        
                <Outlet />
            </Paper>
        </ThemeProvider>        
    );
}


/*
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
                                Phase 2: Back End
                                </Typography>
                                <ul>
                                    <li>Show the website and describe the concept to a friend, who offers to collaborate with me</li>
                                    <li>He creates a backend which greatly expands the number of songs available in the book.
                                        <ul>
                                            <li>Uses Python 3.10 and the Music 21 library</li>
                                            <li>Filters my score corpus of 1200 titles</li>
                                            <li>Outputs a JSON object with data on all the scores suitable for this book</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Typography variant="h3" color="secondary" sx={{marginLeft: '0.5em',
                                                                                marginTop: '0.5em'}}>
                                    Phase 3: Interactivity
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
                                    Phase 4: React
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
                                    Phase 5: Material UI
                                </Typography>
                        
                                <ul>
                                    <li>Become frustrated with the persnicky nature of programming React components</li>
                                    <li>Stumble upon the Material UI library and experiment with it</li>
                                    <li>Implement MUI throughout the entire site</li>
                                </ul>
                            </li>
                        </ul>
                    </Typography>
*/




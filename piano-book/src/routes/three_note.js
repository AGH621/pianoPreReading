/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 0.4
Description: Pedagogical-type page React component.  Built with MUI Accordian and Drawer components. 
The drawer component uses react-router links to the 3-Note songs found in the ScoreDefs JSON file 
imported from the backend.
*/

//External imports
import React from "react";
import { Box,
         Grid,
         Paper,
         ThemeProvider,
         Toolbar,
         Typography } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

//Internal component imports
import Footer from '../components/footer';
import appAccordian from '../components/app_accordian';
import { songDrawer } from '../components/app_drawer';
import { threeNoteTitles } from "../js/sort_ped_type";
import { teacherTextThree, studentTextThree } from '../js/three_note_text';
import { theme } from '../siteTheme.js'

//Image imports
import SingleF from "../images/notes_key_diagram/single_f.png";
import SingleG from "../images/notes_key_diagram/single_g.png";
import SingleA from "../images/notes_key_diagram/single_a.png";
import Arrow from "../images/notes_key_diagram/short_arrow.png";
import SimpleWhtI from "../images/chords_key_diagram/simple_wht_tonic.png";
import SimpleWhtV7 from "../images/chords_key_diagram/simple_wht_dom.png";
import SimpleBlkI from "../images/chords_key_diagram/simple_blk_tonic.png";
import SimpleBlkV7 from "../images/chords_key_diagram/simple_blk_dom.png";



const drawerWidth = 275;
export default function ThreeNote() {
    const title = 'three_note'  
    const song_data = threeNoteTitles();

    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{backgroundColor: "backgrounds.nav"}}>
                <Box sx={{ display: 'flex'}}>
                    
                        {songDrawer(song_data, title)}

                    <Box sx= {{flexGrow: 1, 
                               paddingTop: 3,
                               paddingLeft: 8,
                               paddingRight: 6.5,
                               width: { sm: `calc(100% - ${drawerWidth}px)` }}}>
                        <Toolbar />

                        <Typography variant="h1" sx={{textAlign: 'center',
                                                      paddingBottom: '0.25em'}}> 
                            3 Note Songs
                        </Typography>

                        <Typography paragraph>
                            These are the simplest songs in this book.  They contain the fewest musical elements.  
                            If your student or your child has no experience with music or piano, this is the place to start.
                        </Typography>

                        <Typography variant="h2" color="secondary.dark" sx={{paddingTop: '0.5em'}}>
                            Reading the Symbolic Notation
                        </Typography>
                    
                        <Typography variant="h3" color="secondary" sx={{marginLeft: '1.5em',
                                                                        paddingTop: '0.5em'}}>
                            Pitch
                        </Typography>
                    
                        <Typography paragraph sx={{marginLeft: '2.5em'}}>
                            The songs in this unit are written in symbolic notation.  Each note is represented by a colored key on a mini-keyboard
                            diagram.  Different keys are different colors.  The notes F, G and A are featured in this unit&#39;s songs.   
                    
                            <Grid container sx={{marginLeft: '1em'}}>
                                <Box sx={{padding: "1em"}}>
                                    <img className="pitch do" width="140px" src={SingleF} />
                                </Box>
                    
                                <Box sx={{margin: "1em"}}>
                                    <img className="pitch re" width="140px" src={SingleG} />
                                </Box>
                    
                                <Box sx={{margin: "1em"}}>
                                    <img className="pitch mi" width="140px" src={SingleA} />
                                </Box>
                            </Grid>
                    
                            These notes are easy to locate, just to the left of the three black keys.  I choose to 
                            start with white notes, because they are wider and easier for little fingers to play. If you would rather start
                            with the three black keys, press the "Black Key Melody" button on the song page to switch to those notes.
                        </Typography>
                    
                        <Typography variant="h3" color="secondary" sx={{marginLeft: '1.5em',
                                                                        paddingTop: '0.5em'}}>
                            Rhythm
                        </Typography>
                    
                        <Typography paragraph sx={{marginLeft: '2.5em'}}>
                            How long to hold down each note is indicated by one or more arrows following a keyboard diagram.
                        </Typography>
                        
                        <Typography paragraph sx={{marginLeft: '2.5em',
                                                   textDecoration: 'underline'}}>
                            In duple meter:
                        </Typography>
                            
                        <Typography paragraph sx={{marginLeft: '2.5em',
                                                   marginTop: '-1em'}}>
                            <ul>
                                <li>A diagram by itself = half a beat (an eighth note)
                                    <Box sx={{margin: "1em"}}>
                                        <img className="pitch do" width="140px" src={SingleF} />
                                    </Box>
                                </li>
                        
                                <li>A diagram + one arrow = 1 beat (a quarter note)
                                    <Grid container>
                                        <Box sx={{margin: "1em"}}>
                                            <img className="pitch re" width="140px" src={SingleG} />
                                        </Box>
                                        <Box sx={{paddingTop: "3em"}}>
                                            <img class="lengthen" width="140px" src={Arrow} />
                                        </Box>
                                    </Grid>
                                </li>
                        
                                <li>A diagram + three arrows = 2 beats (a half note)
                                    <Grid container>
                                        <Box sx={{margin: "1em"}}>
                                            <img className="pitch re" width="140px" src={SingleA} />
                                        </Box>
                                        <Box sx={{paddingTop: "3em", paddingRight: "2em"}}>
                                            <img class="lengthen" width="140px" src={Arrow} />
                                        </Box>
                                        <Box sx={{paddingTop: "3em", paddingRight: "2em"}}>
                                            <img class="lengthen" width="140px" src={Arrow} />
                                        </Box>
                                        <Box sx={{paddingTop: "3em", paddingRight: "2em"}}>
                                            <img class="lengthen" width="140px" src={Arrow} />
                                        </Box>
                                    </Grid>
                                </li>
                            </ul>
                        </Typography>
                            
                        <Typography paragraph sx={{marginLeft: '2.5em',
                                                   textDecoration: 'underline'}}>
                            In triple meter:
                        </Typography>
                            
                        <Typography paragraph sx={{marginLeft: '2.5em',
                                                   marginTop: '-1em'}}>
                            <ul>
                                <li>A diagram by itself = a third of a beat (an eighth note)
                                    <Box sx={{margin: "1em"}}>
                                        <img className="pitch do" width="140px" src={SingleF} />
                                    </Box>
                                </li>
                                <li>A diagram + two arrows = 1 beat (a dotted quarter note)
                                    <Grid container>
                                        <Box sx={{margin: "1em"}}>
                                            <img className="pitch re" width="140px" src={SingleG} />
                                        </Box>
                                        <Box sx={{paddingTop: "3em", paddingRight: "2em"}}>
                                            <img class="lengthen" width="140px" src={Arrow} />
                                        </Box>
                                        <Box sx={{paddingTop: "3em", paddingRight: "2em"}}>
                                            <img class="lengthen" width="140px" src={Arrow} />
                                        </Box>
                                    </Grid>
                                </li>
                                <li>A diagram + five arrows = 2 beats (a dotted half note)
                                    <Grid container>
                                        <Box sx={{margin: "1em"}}>
                                            <img className="pitch re" width="140px" src={SingleA} />
                                        </Box>
                                        <Box sx={{paddingTop: "3em", paddingRight: "2em"}}>
                                            <img class="lengthen" width="140px" src={Arrow} />
                                        </Box>
                                        <Box sx={{paddingTop: "3em", paddingRight: "2em"}}>
                                            <img class="lengthen" width="140px" src={Arrow} />
                                        </Box>
                                        <Box sx={{paddingTop: "3em", paddingRight: "2em"}}>
                                            <img class="lengthen" width="140px" src={Arrow} />
                                        </Box>
                                        <Box sx={{paddingTop: "3em", paddingRight: "2em"}}>
                                            <img class="lengthen" width="140px" src={Arrow} />
                                        </Box>
                                        <Box sx={{paddingTop: "3em", paddingRight: "2em"}}>
                                            <img class="lengthen" width="140px" src={Arrow} />
                                        </Box>
                                    </Grid>
                                </li>
                            </ul>
                        </Typography>
                    
                        <Typography variant="h3" color="secondary" sx={{marginLeft: '1.5em',
                                                      paddingTop: '0.5em'}}>
                            Chords
                        </Typography>
                    
                        <Typography paragraph sx={{marginLeft: '2.5em'}}>
                            There are two ways chords are depicted on the song pages.  
                            <ol>
                                <li>Each note has a Roman numeral chord symbol above it.
                                    <Grid container>
                                        <Box sx={{margin: "1em"}}>
                                        <span className="tonic">I</span>
                                        <br />
                                        <img className="pitch do" width="140px" src={SingleF} />
                                        </Box>
                        
                                        <Box sx={{margin: "1em"}}>
                                        <span className="dominant">V7</span>
                                        <br />
                                        <img className="pitch re" width="140px" src={SingleG} />
                                        </Box>
                                    </Grid>
                                </li>
                                <li>By pressing either the "White 2-Note Chords" or "Black 2-Note Chords" will display the keyboard
                                    diagrams showing the keys pressed down to form the dominant and tonic chords
                                    <Grid container>
                                        <Box sx={{margin: "1em"}}>
                                        <span className="tonic">I</span>
                                        <br />
                                        <img className="pitch do" width="140px" src={SimpleWhtI} />
                                        </Box>
                        
                                        <Box sx={{margin: "1em"}}>
                                        <span className="dominant">V7</span>
                                        <br />
                                        <img className="pitch re" width="140px" src={SimpleWhtV7} />
                                        </Box>
                                
                                        <Box sx={{margin: "1em"}}>
                                        <span className="tonic">I</span>
                                        <br />
                                        <img className="pitch do" width="140px" src={SimpleBlkI} />
                                        </Box>
                        
                                        <Box sx={{margin: "1em"}}>
                                        <span className="dominant">V7</span>
                                        <br />
                                        <img className="pitch re" width="140px" src={SimpleBlkV7} />
                                        </Box>
                                    </Grid>
                                </li>
                            </ol>
                        </Typography>
                    
                        {appAccordian(teacherTextThree(), studentTextThree(), title)}
                    </Box> 
                                     
                </Box>
                <Footer />      
                
                <Outlet />

            </Paper>
        </ThemeProvider>
    );
}

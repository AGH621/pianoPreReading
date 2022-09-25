/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 0.2
Description: Pedagogical-type page React component.  Built with MUI Accordian and Drawer components. 
The drawer component uses react-router links to the 3-Note songs found in the ScoreDefs JSON file 
imported from the backend.

TODO: 
    1) Make the drawer and text into a React components.
    2) Override MUI styles on all components.   
*/


import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import ListItem from "@mui/material/ListItem";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from "@mui/material/ListItemText";

import { Outlet, Link } from "react-router-dom";
import Footer from '../components/footer';
import appAccordian from '../components/app_accordian';
import {songDrawer} from '../components/app_drawer';

import SingleF from "../images/notes_key_diagram/single_f.png";
import SingleG from "../images/notes_key_diagram/single_g.png";
import SingleA from "../images/notes_key_diagram/single_a.png";
import Arrow from "../images/notes_key_diagram/short_arrow.png";

import SimpleWhtI from "../images/chords_key_diagram/simple_wht_tonic.png";
import SimpleWhtV7 from "../images/chords_key_diagram/simple_wht_dom.png";
import SimpleBlkI from "../images/chords_key_diagram/simple_blk_tonic.png";
import SimpleBlkV7 from "../images/chords_key_diagram/simple_blk_dom.png";

import { threeNoteTitles } from "../js/sort_ped_type";
import { teacherTextThree, studentTextThree } from '../js/three_note_text';

const drawerWidth = 240;
export default function ThreeNote() {  
    const song_data = threeNoteTitles();
    const drawer = songDrawer(song_data);
    const teacher_text = teacherTextThree();
    const student_text = studentTextThree();

    return (
        <Grid position="relative">
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                {drawer}       

                <Box
                component="main"
                sx= {{flexGrow: 1, p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` }}}
                >
                    <Toolbar />
                    
                    <Typography variant="h1"> 3 Note Songs</Typography>
                    
                    <Typography paragraph>
                        These are the simplest songs in this book.  They contain the fewest musical elements.  
                        If your student or your child has no experience with music or piano, this is the place to start.
                    </Typography>
                    
                    <Typography variant="h3">
                        Reading the Songs and the Unit Concepts
                    </Typography>
                    
                    <Typography variant="h4">
                        Pitch
                    </Typography>
                    
                    <Typography paragraph>
                        The songs in this unit are written in symbolic notation.  Each note is represented by a colored key on a mini-keyboard
                        diagram.  Different keys are different colors.  The notes F, G and A are featured in this unit&#39;s songs.   
                    
                        <Grid container>
                            <Box sx={{margin: "1em"}}>
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
                    
                    <Typography variant="h4">
                        Rhythm
                    </Typography>
                    
                    <Typography paragraph>
                        How long to hold down each note is indicated by one or more arrows following a keyboard diagram.    
                    
                        <Box sx={{margin: "1em"}}>
                            <img class="lengthen" width="140px" src={Arrow} />
                        </Box>
                    
                        In duple meter:
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
                    
                        In triple meter:
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
                    
                    <Typography variant="h4">
                        Chords
                    </Typography>
                    
                    <Typography paragraph>
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
                    
                    {appAccordian(teacherTextThree(), studentTextThree())}
                    
                </Box>               
            </Box>
            <Footer />
            <Outlet />                        
        </Grid>            
    );
}

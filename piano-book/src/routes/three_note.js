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
                        Reading the Songs
                    </Typography>
                    
                    <Typography paragraph>
                        The songs in this unit are written in symbolic notation.  Each note is represented by a colored key on a mini-keyboard
                        diagram.  Different keys are different colors.  These keys are featured in this unit&#39;s songs
                    </Typography>
                    
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
                    
                    <Typography paragraph>
                        When you encounter an arrow picture, hold the key you are playing down longer.  
                    
                        <Box sx={{margin: "1em"}}>
                            <img class="lengthen" width="140px" src={Arrow} />
                        </Box>
                    
                        Multiple arrows in a row mean to hold down the key even longer.  The sound may fade away, but that&#39;s okay.
                    </Typography>
                    
                    <Typography variant="h3">
                        Concepts Taught
                    </Typography>
                    
                    <Typography paragraph>
                        <ul>
                        <li>First three notes of the major scale.</li>
                        <li>Duple meter using symbolic equivalents of eighth, quarter and half notes.</li>
                        <li>Triple meter using symbolic equivalents of eighth, dotted quarter and dotted half notes.</li>
                        <li>Simplified tonic and dominant chords using two notes</li>
                        </ul>
                    </Typography>
                    
                    {appAccordian(teacherTextThree(), studentTextThree())}
                    
                </Box>               
            </Box>
            <Footer />
            <Outlet />                        
        </Grid>            
    );
}

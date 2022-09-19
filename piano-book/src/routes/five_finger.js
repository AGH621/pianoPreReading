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
import { fiveFingerTitles } from "../js/sort_ped_type";
import { teacherTextFive, studentTextFive } from '../js/five_finger_text';

const drawerWidth = 240;
export default function FiveFinger() {  
    const song_data = fiveFingerTitles();
    const drawer = songDrawer(song_data);

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
                    
                    <Typography variant="h1">5 Finger Songs</Typography>
                    
                    <Typography paragraph>
                        We continue to build on the foundation provided by the 3 and 4 note songs.
                    </Typography>
                    
                    <Typography variant="h3">What&#39;s New?</Typography>
                    
                    <Typography variant="h4">Notes</Typography>
                    <Typography paragraph>
                            Fourth note of the major scale (Bb).
                    </Typography>
                    
                    <Typography variant="h4">Transposing</Typography>
                    <Typography paragraph>
                        Songs should now be played in C and G positions in addition to the notated black and white keys
                    </Typography>
                    
                    <Typography variant="h4">Chords</Typography>
                    <Typography paragraph>
                        The subdominant (IV) chord
                    </Typography>
                    
                    {appAccordian(teacherTextFive(), studentTextFive())}
                </Box>               
            </Box>
            <Footer />
            <Outlet />                        
        </Grid>            
    );
}

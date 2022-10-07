/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 0.4
Description: Pedagogical-type page React component.  Built with MUI Accordian and Drawer components. 
The drawer component uses react-router links to the pentatonic songs found in the ScoreDefs JSON file 
imported from the backend.

TODO: Features for this unit
      1) Rhythmic Notation with finger placement pictures
      2) Finger numbers
      3) Button for changing between rhythmic and symbolic notation
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
import { pentatonicTitles } from "../js/sort_ped_type";
import { teacherTextPent, studentTextPent } from '../js/pentatonic_text';
import { theme } from '../siteTheme.js';
import SingleD from "../images/notes_key_diagram/single_d.png";
import SingleDsharp from "../images/notes_key_diagram/single_d_sharp.png";

const drawerWidth = 240;
export default function Pentatonic() {
    const title = 'pentatonic'  
    const song_data = pentatonicTitles();

    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{backgroundColor: "backgrounds.nav"}}>
                <Box sx={{ display: 'flex' }}>

                    {songDrawer(song_data, title)}       

                    <Box component="main" sx= {{flexGrow: 1, 
                                                paddingTop: 3,
                                                paddingLeft: 8,
                                                paddingRight: 6.5,
                                                width: { sm: `calc(100% - ${drawerWidth}px)` }}}>
                        <Toolbar />
                    
                        <Typography variant="h1" sx={{textAlign: 'center',
                                                      paddingBottom: '0.25em'}}>
                            Pentatonic
                        </Typography>
                    
                        <Typography paragraph>
                            We continue to build on the foundation provided by earlier units.  Don&#39;t forget to go back to earlier units and apply new skills
                            to older songs.
                        </Typography>
                    
                        <Typography variant="h2" color="secondary.dark" sx={{paddingTop: '0.5em'}}>
                            What&#39;s New in this Unit?
                        </Typography>
                    
                        <Typography variant="h3" color="secondary" sx={{marginLeft: '1.5em',
                                                                        paddingTop: '0.5em'}}>
                            New Pitches
                        </Typography>
                        
                        <Typography paragraph sx={{marginLeft: '2.5em'}}>
                            Stretching out to reach the sixth note of the major scale.  These songs do not use the fourth note of the major scale, so 
                            Finger 4 plays the fifth note, and Finger 5 plays the 6th note
                        </Typography>
                        
                        <Grid container sx={{marginLeft: '3em',
                                             marginBottom: '2em',}}> 
                            <Box sx={{paddingRight: "4em"}}>
                                <Typography paragraph>D in F pentatonic notation</Typography>
                                <img width="140px" src={SingleD} />
                            </Box>
                            <Box sx={{paddingRight: "4em"}}>
                                <Typography paragraph>D# in F# pentatonic notation</Typography>
                                <img width="140px" src={SingleDsharp} />
                            </Box>
                        </Grid>
                    
                        <Typography variant="h3" color="secondary" sx={{marginLeft: '1.5em',
                                                                        paddingTop: '0.5em'}}>
                            New Notation
                        </Typography>
                        
                        <Typography paragraph paragraph sx={{marginLeft: '2.5em'}}>
                            The symbolic keyboard notation is now being replaced with colored rhythmic notation.  The color of the notes is the same as it
                            was in the keyboard notation.  A small keyboard diagram indicating which note is which color is included with each piece.
                        </Typography>
                    
                        {appAccordian(teacherTextPent(), studentTextPent(), title)}
                    </Box>               
                </Box>
            
                <Footer />
            
                <Outlet />                        
            </Paper>
        </ThemeProvider>                            
    );
}

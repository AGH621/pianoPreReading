/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 3.0
Description: Pedagogical-type page React component.  Built with MUI Accordian and Drawer components. 
The drawer component uses react-router links to the pentatonic songs found in the ScoreDefs JSON file 
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

//Internal imports
import Footer from '../components/footer';
import appAccordian from '../components/app_accordian';
import { songDrawer } from '../components/app_drawer';
import { teacherTextDia, studentTextDia } from '../js/diatonic_text';
import { diatonicTitles } from "../js/sort_ped_type";
import { theme } from '../siteTheme.js';

//Define the width of the left-hand naviagation.
const drawerWidth = 300;

export default function Diatonic() {
    
    //Page title for accordian component.
    const title = 'diatonic'
    
    //Retrieve all the 4-Note titles.  
    const song_data = diatonicTitles();

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
                        
                        <Typography variant="h1" sx={{textAlign: 'left',
                                                      paddingBottom: '0.25em'}}>
                            Diatonic
                        </Typography>
                    
                        <Typography variant="body2">
                            We continue to build on the foundation provided by earlier units.  Don&#39;t forget to go back to earlier units and apply new skills
                            to older songs.
                        </Typography>
                    
                        <Typography variant="h2" color="secondary.dark" sx={{paddingTop: '0.5em'}}>
                            What&#39;s New in this Unit?
                        </Typography>
                    
                        <Typography variant="h3" color="secondary.dark" sx={{marginLeft: '1.5em',
                                                                             paddingTop: '1em'}}>
                            New Pitches
                        </Typography>
                        
                        <Typography variant="body2" sx={{marginLeft: '2em'}}>
                            All of the first six notes of the major scale appear together for the first time.  This means that right hand finger 5 and left hand finger
                            1 are now responsible for two different notes.
                        </Typography>
                    
                        <Typography variant="h3" color="secondary.dark" sx={{marginLeft: '1.5em',
                                                                             paddingTop: '1em'}}>
                            New Transpositions
                        </Typography>
                        
                        <Typography variant="body2" sx={{marginLeft: '2em'}}>
                            Students should play the songs in D and A positions in addition to the ones introduced in previous units.  Transposition needs to be done
                            "by ear", songs will continue to be notated in F and F# positions only.
                        </Typography>
                        
                        <Typography variant="h3" color="secondary.dark" sx={{marginLeft: '1.5em',
                                                                             paddingTop: '1em'}}>
                            Removing Extraneous Chord Symbols
                        </Typography>
                        
                        <Typography variant="body2" sx={{marginLeft: '2em'}}>
                            Repeated chord symbols have been eliminated. Keep repeating the previous chord, until a new one is reached.
                        </Typography>
                    
                        {appAccordian(teacherTextDia(), studentTextDia(), title)}
                    </Box>               
                </Box>
                        
                <Footer />
                        
                <Outlet />
            </Paper>
        </ThemeProvider>                
    );
}

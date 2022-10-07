/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 0.3
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

//Internal component imports
import Footer from '../components/footer';
import appAccordian from '../components/app_accordian';
import { songDrawer } from '../components/app_drawer';
import { teacherTextMinor, studentTextMinor } from '../js/minor_text';
import { minorTitles } from "../js/sort_ped_type";
import { theme } from '../siteTheme.js';

const drawerWidth = 275;
export default function Minor() {
    const title = 'minor'  
    const song_data = minorTitles();

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
                            Minor
                        </Typography>
                    
                        <Typography paragraph>
                            We continue to build on the foundation provided by earlier units. Try transposing the major songs in the previous units into the minor mode.
                        </Typography>
                    
                        <Typography variant="h2" color="secondary.dark" sx={{paddingTop: '0.5em'}}>
                            What&#39;s New in this Unit?
                        </Typography>
                    
                        <Typography variant="h3" color="secondary" sx={{marginLeft: '1.5em',
                                                                        paddingTop: '0.5em'}}>
                           The Minor Mode
                        </Typography>
                        
                        <Typography paragraph sx={{marginLeft: '2.5em'}}>
                            These songs are all in the minor mode, meaning a new placement for both left and right hand finger 3.
                        </Typography>
                    
                        <Typography variant="h3" color="secondary" sx={{marginLeft: '1.5em',
                                                                        paddingTop: '0.5em'}}>
                            New Transpositions
                        </Typography>
                        
                        <Typography paragraph sx={{marginLeft: '2.5em'}}>
                            Students should play the songs in D and A positions in addition to the ones introduced in previous units.  Transposition needs to be done
                            "by ear", songs will continue to be notated in F and F# positions only.
                        </Typography>
                    
                        <Typography variant="h3" color="secondary" sx={{marginLeft: '1.5em',
                                                                        paddingTop: '0.5em'}}>
                            New Chords
                        </Typography>
                        
                        <Typography paragraph sx={{marginLeft: '2.5em'}}>
                            The minor versions of the tonic (i) and subdominant (iv). We will continue to use the dominant seventh as is.
                        </Typography>
                    
                        {appAccordian(teacherTextMinor(), studentTextMinor(), title)}
                    </Box>               
                </Box>
                
                <Footer />
                
                <Outlet />
            </Paper>
        </ThemeProvider> 
    );
}

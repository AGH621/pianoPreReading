/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 0.4
Description: Pedagogical-type page React component.  Built with MUI Accordian and Drawer components. 
The drawer component uses react-router links to the 5-Finger songs found in the ScoreDefs JSON file 
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
import { fiveFingerTitles } from "../js/sort_ped_type";
import { teacherTextFive, studentTextFive } from '../js/five_finger_text';
import { theme } from '../siteTheme.js';

//Internal image imports
import SingleAsharp from "../images/notes_key_diagram/single_a_sharp.png";
import SingleB from "../images/notes_key_diagram/single_b.png";
import FullWhtIV from "../images/chords_key_diagram/full_wht_subdom.png";
import FullBlkIV from "../images/chords_key_diagram/full_blk_subdom.png";

const drawerWidth = 275;
export default function FiveFinger() {  
    const title = 'five_finger'
    const song_data = fiveFingerTitles();

    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{backgroundColor: "backgrounds.nav"}}>
                <Box sx={{ display: 'flex' }}>

                    {songDrawer(song_data, title)}       

                    <Box sx= {{flexGrow: 1, 
                               paddingTop: 3,
                               paddingLeft: 8,
                               paddingRight: 6.5,
                               width: { sm: `calc(100% - ${drawerWidth}px)` }}}>
                        <Toolbar />
                    
                        <Typography variant="h1" sx={{textAlign: 'center',
                                                      paddingBottom: '0.25em'}}>
                            5 Finger Songs
                        </Typography>
                    
                        <Typography paragraph>
                            We continue to build on the foundation provided by the 3 and 4 note songs.
                        </Typography>
                    
                        <Typography variant="h2" color="secondary.dark" sx={{paddingTop: '0.5em'}}>
                            What&#39;s New in this Unit?
                        </Typography>
                    
                        <Typography variant="h3" color="secondary" sx={{marginLeft: '1.5em',
                                                                        paddingTop: '0.5em'}}>
                            New Pitches
                        </Typography>
                    
                        <Typography paragraph sx={{marginLeft: '2.5em'}}>
                            Fourth note of the major scale.
                        </Typography>
                          
                        <Grid container sx={{marginLeft: '3em',
                                             marginBottom: '2em',}}> 
                            <Box sx={{paddingRight: "4em"}}>
                                <Typography paragraph>B-flat in F major notation</Typography>
                                <img width="140px" src={SingleAsharp} />
                            </Box>
                            <Box sx={{paddingRight: "4em"}}>
                                <Typography paragraph>B in F-sharp major notation</Typography>
                                <img width="140px" src={SingleB} />
                            </Box>
                        </Grid>
                    
                        <Typography variant="h3" color="secondary" sx={{marginLeft: '1.5em',
                                                                        paddingTop: '0.5em'}}>
                            New Skill: Transposing
                        </Typography>
                    
                        <Typography paragraph sx={{marginLeft: '2.5em'}}>
                            Songs should now be played in C and G positions by ear in addition to the notated black and white keys
                        </Typography>
                    
                        <Typography variant="h3" color="secondary" sx={{marginLeft: '1.5em',
                                                                        paddingTop: '0.5em'}}>
                            New Chords
                        </Typography>
                    
                        <Typography paragraph sx={{marginLeft: '2.5em'}}>
                            The subdominant (IV) chord
                            <ul> 
                                <li>White Keys
                                    <Box sx={{marginBottom: "2em"}}>
                                        <Typography variant="chord">IV</Typography>
                                        <br />
                                        <img width="140px" src={FullWhtIV} />
                                    </Box>
                                </li>
                            
                                <li>Black Keys
                                    <Box sx={{marginBottom: "2em"}}>
                                    <Typography variant="chord">IV</Typography>
                                    <br />
                                    <img width="140px" src={FullBlkIV} />
                                    </Box>
                                </li>
                            </ul>
                        </Typography>
                    
                        {appAccordian(teacherTextFive(), studentTextFive(), title)}
                    </Box>               
                </Box>
            
                <Footer />
            
                <Outlet />
            </Paper>
        </ThemeProvider>            
    );
}

/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 3.0
Description: Pedagogical-type page React component.  Built with MUI Accordian and Drawer components. 
The drawer component uses react-router links to the 4-Note songs found in the ScoreDefs JSON file 
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
import { teacherTextFour, studentTextFour } from '../js/four_note_text';
import { fourNoteTitles } from "../js/sort_ped_type";
import { theme } from '../siteTheme.js'

//Image imports
import SingleC from "../images/notes_key_diagram/single_c.png";
import SingleCsharp from "../images/notes_key_diagram/single_c_sharp.png";
import Rest from "../images/notes_key_diagram/rest.png";
import Arrow from "../images/notes_key_diagram/short_arrow.png";
import FullWhtI from "../images/chords_key_diagram/full_wht_tonic.png";
import FullWhtV7 from "../images/chords_key_diagram/full_wht_dom.png";
import FullBlkI from "../images/chords_key_diagram/full_blk_tonic.png";
import FullBlkV7 from "../images/chords_key_diagram/full_blk_dom.png";

//Define the width of the left-hand naviagation.
const drawerWidth = 300;

export default function FourNote() {
    
    //Page title for accordian component.
    const title = 'four_note'  
    
    //Retrieve all the 4-Note titles.
    const song_data = fourNoteTitles();

    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{backgroundColor: "backgrounds.nav"}}>
                <Box sx={{ display: 'flex' }}>

                    <Box sx={{backgroundColor: "backgrounds.fourNote"}}>
                        {songDrawer(song_data, title)}
                    </Box>     

                    <Box sx= {{flexGrow: 1, 
                               paddingTop: 3,
                               paddingLeft: 8,
                               paddingRight: 6.5,
                               width: { sm: `calc(100% - ${drawerWidth}px)` }}}>
                        <Toolbar />
                    
                        <Typography variant="h1" sx={{textAlign: 'left',
                                                      paddingBottom: '0.25em'}}> 
                            Four Note
                        </Typography>
                    
                        <Typography variant="body2">
                            These are slightly more complex that the 3-Note songs (see below for details). All the 3-Note song elements are used, but new material is added.
                        </Typography>
                    
                        <Typography variant="h2" color="secondary.dark" sx={{paddingTop: '0.5em'}}>
                            What&#39;s New in this Unit?
                        </Typography>
                    
                        <Typography variant="h3" color="secondary.dark" sx={{marginLeft: '1em',
                                                                             paddingTop: '0.5em'}}>
                            New Pitches
                        </Typography>
                    
                        <Typography variant="body2" sx={{marginLeft: '2em', marginBottom: '0.5em'}}>
                            Fifth note of the major scale.
                        </Typography>
                          
                        <Grid container sx={{marginLeft: '3em',
                                             marginBottom: '2em',}}> 
                            <Box sx={{paddingRight: "4em"}}>
                                <Typography variant="body2" sx={{marginBottom: "0.5em"}}>C in white key notation</Typography>
                                <img width="140px" src={SingleC} />
                            </Box>
                        
                            <Box sx={{paddingRight: "4em"}}>
                                <Typography variant="body2" sx={{marginBottom: "0.5em"}}>C# in white key notation</Typography>
                                <img width="140px" src={SingleCsharp} />
                            </Box>
                        </Grid>
                        
                        <Typography variant="h3" color="secondary.dark" sx={{marginLeft: '1em',
                                                                             paddingTop: '0.5em'}}>
                            New Rhythms
                        </Typography>
                    
                    <Typography variant="body2" sx={{marginLeft: '2em',
                                                     textDecoration: 'underline'}}>
                        Duple meter
                    </Typography>
                        
                    <Typography variant="body2" sx={{marginLeft: '2em',
                                                     marginTop: '-1em'}}>
                            <ul>
                                <li> 
                                    <Typography variant="body2" sx={{paddingTop: "0.5em"}}>
                                    Quarter rest
                                    </Typography>
                        
                                    <Grid container>
                                        <Box sx={{paddingRight: "2em", marginTop: "0.5em"}}>
                                            <img className="pitch rest" width="140px" src={Rest} />
                                        </Box>
                    
                                        <Box sx={{paddingTop: "1em", paddingRight: "2em"}}>
                                            <img class="lengthen" width="140px" src={Arrow} />
                                        </Box>
                                    </Grid>
                                </li>
                            </ul>
                        </Typography>
                        
                    <Typography variant="body2" sx={{marginLeft: '2em',
                                                     textDecoration: 'underline'}}>
                        Triple meter
                    </Typography>
                        
                    <Typography variant="body2" sx={{marginLeft: '2em',
                                                     marginTop: '-1em'}}>
                            <ul>
                                <li>
                                    <Typography variant="body2" sx={{paddingTop: "0.5em"}}>
                                        Dotted quarter rest
                                    </Typography>
                        
                                    <Grid container>
                                        <Box sx={{paddingRight: "2em", marginTop: "0.5em"}}>
                                            <img className="pitch rest" width="140px" src={Rest} />
                                        </Box>
                                    
                                        <Box sx={{paddingTop: "1em", paddingRight: "2em"}}>
                                            <img class="lengthen" width="140px" src={Arrow} />
                                        </Box>
                                    
                                        <Box sx={{paddingTop: "1em", paddingRight: "2em"}}>
                                            <img class="lengthen" width="140px" src={Arrow} />
                                        </Box>
                                    </Grid>
                                </li>
                            </ul>
                        </Typography>
                    
                        <Typography variant="h3" color="secondary.dark" sx={{marginLeft: '1em',
                                                                             paddingTop: '0.5em'}}>
                            New Chords
                        </Typography>
                    
                        <Typography variant="body2" sx={{marginLeft: '2.5em'}}>
                            Full tonic and dominant chords using three notes.
                            <ul> 
                                <li>
                                    <Typography variant="body2" sx={{textDecoration: 'underline'}}>
                                        White Keys
                                    </Typography>
                                    <Grid container sx={{ marginTop: "-1.25em",
                                                          marginBottom: "1em"}}>
                                        <Box sx={{margin: "1em"}}>
                                        <Typography variant="chord">I</Typography>
                                        <br />
                                        <img width="140px" src={FullWhtI} />
                                        </Box>
                        
                                        <Box sx={{margin: "1em"}}>
                                        <Typography variant="chord">V7</Typography>
                                        <br />
                                        <img width="130px" src={FullWhtV7} />
                                        </Box>
                                    </Grid>
                                </li>
                                <li>
                                    <Typography variant="body2" sx={{textDecoration: 'underline'}}>
                                        Black Keys
                                    </Typography>
                        
                                    <Grid container sx={{ marginTop: "-1.25em",
                                                          marginBottom: "1em"}}>
                                        <Box sx={{margin: "1em"}}>
                                        <Typography variant="chord">I</Typography>
                                        <br />
                                        <img className="pitch do" width="140px" src={FullBlkI} />
                                        </Box>
                        
                                        <Box sx={{margin: "1em"}}>
                                        <Typography variant="chord">V7</Typography>
                                        <br />
                                        <img className="pitch re" width="140px" src={FullBlkV7} />
                                        </Box>
                                    </Grid>
                                </li>
                            </ul>
                        </Typography>
                    
                        {appAccordian(teacherTextFour(), studentTextFour(), title)}
                    </Box>               
                </Box>
                <Footer />
                    
                <Outlet />                        
            </Paper>
        </ThemeProvider>                        
    );
}

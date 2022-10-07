/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 0.4
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

//Internal component imports
import Footer from '../components/footer';
import appAccordian from '../components/app_accordian';
import { songDrawer } from '../components/app_drawer';
import { teacherTextFour, studentTextFour } from '../js/four_note_text';
import { fourNoteTitles } from "../js/sort_ped_type";
import { theme } from '../siteTheme.js'

//Internal image imports
import SingleC from "../images/notes_key_diagram/single_c.png";
import SingleCsharp from "../images/notes_key_diagram/single_c_sharp.png";
import Rest from "../images/notes_key_diagram/rest.png";
import Arrow from "../images/notes_key_diagram/short_arrow.png";
import FullWhtI from "../images/chords_key_diagram/full_wht_tonic.png";
import FullWhtV7 from "../images/chords_key_diagram/full_wht_dom.png";
import FullBlkI from "../images/chords_key_diagram/full_blk_tonic.png";
import FullBlkV7 from "../images/chords_key_diagram/full_blk_dom.png";


const drawerWidth = 240;
export default function FourNote() {
    const title = 'four_note'  
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
                    
                        <Typography variant="h1" sx={{textAlign: 'center',
                                                      paddingBottom: '0.25em'}}> 
                            4 Note Songs
                        </Typography>
                    
                        <Typography paragraph>
                            These are slightly more complex that the 3-Note songs (see below for details). All the 3-Note song elements are used, but new material is added.
                        </Typography>
                    
                        <Typography variant="h2" color="secondary.dark" sx={{paddingTop: '0.5em'}}>
                            What&#39;s New in this Unit?
                        </Typography>
                    
                        <Typography variant="h3" color="secondary" sx={{marginLeft: '1.5em',
                                                      paddingTop: '0.5em'}}>
                            New Pitches
                        </Typography>
                    
                        <Typography paragraph sx={{marginLeft: '2.5em'}}>
                            Fifth note of the major scale.
                        </Typography>
                          
                        <Grid container sx={{marginLeft: '3em',
                                             marginBottom: '2em',}}> 
                            <Box sx={{paddingRight: "4em"}}>
                                <Typography paragraph>C in white key notation</Typography>
                                <img width="140px" src={SingleC} />
                            </Box>
                            <Box sx={{paddingRight: "4em"}}>
                                <Typography paragraph>C# in black key notation</Typography>
                                <img width="140px" src={SingleCsharp} />
                            </Box>
                        </Grid>
                        
                    
                        <Typography variant="h3" color="secondary" sx={{marginLeft: '1.5em',
                                                      paddingTop: '0.5em'}}>
                            New Rhythms
                        </Typography>
                    
                        <Typography paragraph sx={{marginLeft: '2.5em',
                                                   marginTop: '0.25em'}}>
                            1 beat rests 
                            <ul>
                                <li> <Typography paragraph sx={{textDecoration: 'underline',
                                                                marginTop: '-0.5em'}}>In duple meter</Typography>
                                    <Grid container>
                                        <Box sx={{marginBottom: "2em",
                                                  marginLeft: "1em",
                                                  paddingRight: "2em"}}>
                                            <img className="pitch rest" width="140px" src={Rest} />
                                        </Box>
                    
                                        <Box sx={{paddingTop: "1em", paddingRight: "2em"}}>
                                            <img class="lengthen" width="140px" src={Arrow} />
                                        </Box>
                                    </Grid>
                                </li>
                            
                                <li> <Typography paragraph sx={{textDecoration: 'underline'}}>In triple meter</Typography>
                                    <Grid container>
                                        <Box sx={{marginLeft: "1em", paddingRight: "2em"}}>
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
                    
                        <Typography variant="h3" color="secondary" sx={{marginLeft: '1.5em',
                                                      paddingTop: '0.5em'}}>
                            New Chords
                        </Typography>
                    
                        <Typography paragraph sx={{marginLeft: '2.5em'}}>
                            Full tonic and dominant chords using three notes.
                            <ul> 
                                <li><Typography paragraph sx={{textDecoration: 'underline'}}>White Keys</Typography>
                                    <Grid container sx={{ marginTop: "-1.25em",
                                                          marginBottom: "1em"}}>
                                        <Box sx={{margin: "2em"}}>
                                        <Typography variant="chord">I</Typography>
                                        <br />
                                        <img width="140px" src={FullWhtI} />
                                        </Box>
                        
                                        <Box sx={{margin: "2em"}}>
                                        <Typography variant="chord">V7</Typography>
                                        <br />
                                        <img width="130px" src={FullWhtV7} />
                                        </Box>
                                    </Grid>
                                </li>
                                <li><Typography paragraph sx={{textDecoration: 'underline'}}>Black Keys</Typography>
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

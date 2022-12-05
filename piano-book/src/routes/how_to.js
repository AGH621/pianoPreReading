/*
Created by: Anne Hamill
Created on: 4 December
Version: 3.0
Description: How to use the symbolic notation
*/

//External imports
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Typography,
         Grid,
         Box,
         Paper,
         ThemeProvider } from '@mui/material';

//Internal imports
import { readText } from '../js/read_text';
import Footer from '../components/footer';
import { theme } from '../siteTheme.js'

//Image imports
import SingleF from "../images/notes_key_diagram/single_f.png";
import SingleG from "../images/notes_key_diagram/single_g.png";
import SingleA from "../images/notes_key_diagram/single_a.png";
import Arrow from "../images/notes_key_diagram/short_arrow.png";
import Rest from "../images/notes_key_diagram/rest.png";

//Tutorial on using symbolic notation.
export default function HowTo() {
    const title = 'how_to'
    
    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{backgroundColor: "backgrounds.nav"}}>
                <Box sx={{marginTop: "3em",
                          marginLeft: "5em",
                          marginRight: "5em"}}>
                    <Typography variant="h1" sx={{paddingTop: "0.75em",}}>
                        How to Use this Book
                    </Typography>
        
                    <Typography variant="h3" color="secondary.dark" sx={{marginLeft: '1.5em',
                                                                         paddingTop: '1em'}}>
                        Notes
                    </Typography>
                            
                    <Typography variant="body1" sx={{marginBottom: "2em",
                                                     marginLeft: "2.5em"}}>
                            The songs in this book are written in symbolic notation.  Each note is represented by a colored key on a mini-keyboard
                            diagram.  Different keys are different colors.  It is assumed that all the notes are within the same octave, but the diagram
                            can represent any octave on the piano. For example:  
                    </Typography>
        
                    <Typography variant="body1" sx={{marginBottom: "2em",
                                                     marginLeft: "5em"}}>
                                These two notes are the same:
                                
                                <Grid container>
                                    <Box sx={{paddingTop: "1em",
                                              paddingRight: "1em",}}>
                                        <img className="pitch do" width="140px" src={SingleF} />
                                    </Box>
                    
                                    <Box sx={{padding: "1em"}}>
                                        <img className="pitch do" width="140px" src={SingleF} />
                                    </Box>
                                </Grid>
                    </Typography>
                    <Typography variant="body1" sx={{marginBottom: "2em",
                                                     marginLeft: "5em"}}>
        
                                And these notes are adjacent to each other:
                                
                                <Grid container>
                                    <Box sx={{paddingTop: "1em",
                                              paddingRight: "1em",}}>
                                        <img className="pitch do" width="140px" src={SingleF} />
                                    </Box>
                    
                                    <Box sx={{margin: "1em"}}>
                                        <img className="pitch re" width="140px" src={SingleG} />
                                    </Box>
                    
                                    <Box sx={{margin: "1em"}}>
                                        <img className="pitch mi" width="140px" src={SingleA} />
                                    </Box>
                                </Grid>
                    </Typography>
                    
                    <Typography variant="body1" sx={{marginBottom: "2em",
                                                     marginLeft: "5em"}}>
                    Rests are represented by a grayed out keyboard diagram like this:
                    
                    <Grid container>
                        <Box sx={{paddingTop: "1em",
                                  paddingRight: "1em",}}>
                            <img className="pitch do" width="140px" src={Rest} />
                        </Box>
                    </Grid>
                                 
                    </Typography>
                    
                    <Typography variant="h3" color="secondary.dark" sx={{marginLeft: '1.5em',
                                                                         paddingTop: '1em'}}>
                        Rhythms
                    </Typography>
                    
                    <Typography variant="body1" sx={{marginBottom: "2em",
                                                     marginLeft: "2.5em"}}>
                    Each keyboard diagram can be thought of as an eighth note.  It is the shortest note value found this book.
                    To indicate longer note values, arrows are added after a diagram.  Each arrow represents an additional eighth
                    note&#39;s length. For example:
                    </Typography>
                    
                    <Typography variant="body1" sx={{marginBottom: "2em",
                                                     marginLeft: "5em"}}>
                                This is a quarter note
                                <Grid container>
                                    <Box sx={{paddingTop: "1em",
                                              paddingRight: "1em",}}>
                                        <img className="pitch re" width="140px" src={SingleA} />
                                    </Box>
                                    <Box sx={{paddingTop: "2.5em"}}>
                                        <img class="lengthen" width="140px" src={Arrow} />
                                    </Box>
                                </Grid>
                    </Typography>
                    
                    <Typography variant="body1" sx={{marginBottom: "2em",
                                                     marginLeft: "5em"}}>
                        This is a dotted quarter note
                        <Grid container>
                            <Box sx={{paddingTop: "1em",
                                      paddingRight: "1em",}}>
                                <img className="pitch re" width="140px" src={SingleA} />
                            </Box>
                            <Box sx={{paddingTop: "2.5em", paddingRight: "2em"}}>
                                <img class="lengthen" width="140px" src={Arrow} />
                            </Box>
                            <Box sx={{paddingTop: "2.5em", paddingRight: "2em"}}>
                                <img class="lengthen" width="140px" src={Arrow} />
                            </Box>
                        </Grid>
                    </Typography>
                    <Typography variant="body1" sx={{marginBottom: "2em",
                                                     marginLeft: "5em"}}>
                        This is a half note
                        <Grid container>
                            <Box sx={{paddingTop: "1em",
                                      paddingRight: "1em",}}>
                                <img className="pitch re" width="140px" src={SingleA} />
                            </Box>
                            <Box sx={{paddingTop: "2.5em", paddingRight: "2em"}}>
                                <img class="lengthen" width="140px" src={Arrow} />
                            </Box>
                            <Box sx={{paddingTop: "2.5em", paddingRight: "2em"}}>
                                <img class="lengthen" width="140px" src={Arrow} />
                            </Box>
                            <Box sx={{paddingTop: "2.5em", paddingRight: "2em"}}>
                                <img class="lengthen" width="140px" src={Arrow} />
                            </Box>
                        </Grid>
                    </Typography>
                </Box>
                    
                <Footer />
                    
                <Outlet />
            </Paper>
        </ThemeProvider>    
    );
}
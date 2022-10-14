/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 0.3
Description: The page component where each song is rendered.

TODO: 
1) Make Song View drawer disapper completely and song the full-page width

*/

//External Imports
import React, { useState } from "react";
import { AppBar,
         Box,
         CssBaseline,
         Divider,
         Drawer,
         FormControlLabel,
         FormControl, 
         FormLabel,
         Grid,
         IconButton,
         List,
         Paper,
         Radio,
         RadioGroup,
         ThemeProvider,
         Toolbar,
         Typography, } from "@mui/material/";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

// Internal imports
import { Outlet, useParams } from "react-router-dom";
import Footer from '../components/footer';
import { getTitle } from "../js/sort_ped_type";
import { TransposeRadioButtons } from "../js/view_transpose";
import { ThreeNoteRadioButtons } from "../js/three_note_views";
import { FourNoteRadioButtons } from "../js/four_note_views";
import { theme } from '../siteTheme.js'

// Import pictures
import SingleA from "../images/notes_key_diagram/single_a.png";
import SingleG from "../images/notes_key_diagram/single_g.png";
import SingleF from "../images/notes_key_diagram/single_f.png";
import SingleC from "../images/notes_key_diagram/single_c.png";
import SingleD from "../images/notes_key_diagram/single_d.png";
import SingleE from "../images/notes_key_diagram/single_e.png";
import SingleBflat from "../images/notes_key_diagram/single_a_sharp.png";
import Rest from "../images/notes_key_diagram/rest.png";
import Arrow from "../images/notes_key_diagram/short_arrow.png";

// Assemble the html pieces to render a single note in symbolic notation
function oneNote(a_note) {
    let the_pix = [];

    if (a_note === 'mi') {
        /*the_pix.push(<img className="fingerings" src={LfTwo} />)*/
        the_pix.push(<Typography variant="chord" color="black">I</Typography>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch mi" width="140px" src={SingleA} />)
    }
    else if (a_note === 're') {
        /*the_pix.push(<img className="fingerings" src={LfThree} />)*/
        the_pix.push(<Typography variant="chord" color="black">V7</Typography>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch re" width="140px" src={SingleG} />)
    }
    else if (a_note === 'do') {
        /*the_pix.push(<img className="fingerings" src={LfFour} />)*/
        the_pix.push(<Typography variant="chord" color="black">I</Typography>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch do" width="140px" src={SingleF} />)
    }
    else if (a_note === 'sol') {
        /*the_pix.push(<img className="fingerings" src={LfFour} />)*/
        the_pix.push(<Typography variant="chord" color="black">V7</Typography>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch sol" width="140px" src={SingleC} />)
    }
    else if (a_note === 'la') {
        /*the_pix.push(<img className="fingerings" src={LfFour} />)*/
        the_pix.push(<Typography variant="chord" color="black">IV</Typography>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch la" width="140px" src={SingleD} />)
    }
    else if (a_note === 'fa') {
        /*the_pix.push(<img className="fingerings" src={LfFour} />)*/
        the_pix.push(<Typography variant="chord" color="black">IV</Typography>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch fa" width="140px" src={SingleBflat} />)
    }
    else if (a_note === 'ti') {
        /*the_pix.push(<img className="fingerings" src={LfFour} />)*/
        the_pix.push(<Typography variant="chord" color="black">V7</Typography>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch ti" width="140px" src={SingleE} />)
    }
    
    else if (a_note === 'rest') {
        /*the_pix.push(<img className="fingerings" src={LfFour} />)*/
        the_pix.push(<Typography variant="chord">(Rest)</Typography>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch rest" width="140px" src={Rest} />)
    }
    return the_pix
}

// Assemble the notes in order of appearance and add arrows to indicate the length of each note.  
// Thus giving us the entire song as an array.
function writeSong(a_song) {
    let component_list = [];

    for (let n=0; n<a_song.notes.length; n++) {
        if (a_song.notes[n].duration === 'Tiny') {
            component_list.push(
                <Box>
                    <p>
                    {oneNote(a_song.notes[n].pitch)}
                    <br />
                    <Typography variant="lyric">
                        {a_song.notes[n].lyric[0]}
                    </Typography>
                    </p>
                </Box>
            )}
            else if (a_song.notes[n].duration === 'Short') {
                component_list.push(
                    <Box>
                        <p>
                        {oneNote(a_song.notes[n].pitch)}
                        <br />
                        <Typography variant="lyric">
                            {a_song.notes[n].lyric[0]}
                        </Typography>
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingBottom: "1em"}}>
                        <p>
                            <br />
                            <img width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
            }
            else if (a_song.notes[n].duration === 'Kinda_Short') {
                component_list.push(
                    <Box>
                        <p>
                        {oneNote(a_song.notes[n].pitch)}
                        <br />
                        <Typography variant="lyric">
                            {a_song.notes[n].lyric[0]}
                        </Typography>
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingBottom: "1em"}}>
                        <p>
                            <br />
                            <img width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                    )
                component_list.push(
                    <Box sx={{paddingBottom: "1em"}}>
                        <p>
                            <br />
                            <img width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                    )
            }
            else if (a_song.notes[n].duration === 'Medium') {
                component_list.push(
                    <Box>
                        <p>
                        {oneNote(a_song.notes[n].pitch)}
                        <br />
                        <Typography variant="lyric">
                            {a_song.notes[n].lyric[0]}
                        </Typography>
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingBottom: "1em"}}>
                        <p>
                            <br />
                            <img width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingBottom: "1em"}}>
                        <p>
                            <br />
                            <img width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingBottom: "1em"}}>
                        <p>
                            <br />
                            <img width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
            }
            else if (a_song.notes[n].duration === 'Kinda_Long') {
                component_list.push(
                    <Box>
                        <p>
                        {oneNote(a_song.notes[n].pitch)}
                        <br />
                        <Typography variant="lyric">
                            {a_song.notes[n].lyric[0]}
                        </Typography>
                        </p>
                    </Box>
                    )
                    component_list.push(
                        <Box sx={{paddingBottom: "1em"}}>
                            <p>
                                <br />
                                <img width="140px" src={Arrow} />
                                <br />
                            </p>
                        </Box>
                    )
                    component_list.push(
                        <Box sx={{paddingBottom: "1em"}}>
                            <p>
                                <br />
                                <img width="140px" src={Arrow} />
                                <br />
                            </p>
                        </Box>
                    )
                    component_list.push(
                        <Box sx={{paddingBottom: "1em"}}>
                            <p>
                                <br />
                                <img width="140px" src={Arrow} />
                                <br />
                            </p>
                        </Box>
                    )
                    component_list.push(
                        <Box sx={{paddingBottom: "1em"}}>
                            <p>
                                <br />
                                <img width="140px" src={Arrow} />
                                <br />
                            </p>
                        </Box>
                    )
                    component_list.push(
                        <Box sx={{paddingBottom: "1em"}}>
                            <p>
                                <br />
                                <img width="140px" src={Arrow} />
                                <br />
                            </p>
                        </Box>
                    )
            }
            else if (a_song.notes[n].duration === 'Long') {
                component_list.push(
                    <Box>
                        <p>
                        {oneNote(a_song.notes[n].pitch)}
                        <br />
                        <Typography variant="lyric">
                            {a_song.notes[n].lyric[0]}
                        </Typography>
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingBottom: "1em"}}>
                        <p>
                            <br />
                            <img width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingBottom: "1em"}}>
                        <p>
                            <br />
                            <img width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingBottom: "1em"}}>
                        <p>
                            <br />
                            <img width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingBottom: "1em"}}>
                        <p>
                            <br />
                            <img width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingBottom: "1em"}}>
                        <p>
                            <br />
                            <img width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingBottom: "1em"}}>
                        <p>
                            <br />
                            <img width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingBottom: "1em"}}>
                        <p>
                            <br />
                            <img width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
            }
    }
    return component_list
}

const drawerWidth = 240;

export default function SongPage() {
    let params = useParams();
    let the_song = getTitle(params.songTitle);
    
    const [open, setOpen] = React.useState(true);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    
    function radioButtons(a_song) {
        if (a_song.score_data.pedagogical_score_type === '3-Note') {
            return (<ThreeNoteRadioButtons />)
        }
        else if (a_song.score_data.pedagogical_score_type === '4-Note') {
            return (<FourNoteRadioButtons />)
        }
        else {
            return (<TransposeRadioButtons />)
        }
    }
    
    function songBackground(a_type) {
        switch(a_type) {
            case '3-Note':
                return {backgroundColor: "backgrounds.threeNote"}
                break;
            case '4-Note':
                return {backgroundColor: "backgrounds.fourNote"}
                break;
            case '5-Finger':
                return {backgroundColor: "backgrounds.fiveFinger"}
                break;
            case 'Pentatonic':
                return {backgroundColor: "backgrounds.pentatonic"}
                break;
            case 'Diatonic':
                return {backgroundColor: "backgrounds.diatonic"}
                break;
            case 'minor':
                return {backgroundColor: "backgrounds.minor"}
                break;
            default:
                return {backgroundColor: "backgrounds.nav"}
                break;
        }
    }
    
    function songGrid(a_meter){
        console.log(a_meter)
        if (a_meter === 'Duple') {
            return (
                <Grid container direction="row" 
                                justify="center" 
                                alignItems="center" 
                                columns={16}
                                spacing={2}>
                    {writeSong(the_song).map((value) => (
                        <Grid item xs={8} md={4} lg={2}>
                            {value}
                        </Grid>        

                    ))}   
                </Grid>
            )
        }
        else {
            return (
                <Grid container direction="row" 
                                justify="center" 
                                alignItems="center" 
                                columns={12}
                                spacing={2}>
                    {writeSong(the_song).map((value) => (
                        <Grid item md={4} lg={2}>
                            {value}
                        </Grid>        

                    ))}   
                </Grid>
            )
        }
    }
    
    return (
        <ThemeProvider theme={theme}>
            <Paper sx={songBackground(the_song.score_data.pedagogical_score_type)}>
                <Box sx={{ display: 'flex',}}>
                    <CssBaseline />
                    
                    <Paper sx={{backgroundColor: "backgrounds.nav"}}>
                        <Box sx={{ width: { sm: drawerWidth }, 
                                   flexShrink: { sm: 0 }}}>
    
                            <Divider sx={{margin: "0.5em"}}/>
    
                            <Drawer PaperProps={{ sx: {marginTop: "3em",
                                                       marginBottom: "5em",
                                                       backgroundColor: "backgrounds.nav"}
                                               }} 
                                    variant="permanent" anchor="left" open={open}
                                    sx={{display: { xs: 'block', 
                                                    sm: 'block' },
                                        '& .MuiDrawer-paper': { boxSizing: 'border-box', 
                                                                width: drawerWidth },
                                        }}>
                                <Toolbar sx={{marginTop: "0.5em"}}>
                                    <Typography variant="h4">
                                        Song Views
                                    </Typography>
                                </Toolbar>
                    
                                <Divider sx={{margin: "0.5em"}}/>  
    
                                <FormControl sx={{marginLeft: "1em"}}>
                                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label"
                                                name="radio-buttons-group">
                                        {radioButtons(the_song)}
                                    </RadioGroup>
                                </FormControl>
                            
                                <Divider sx={{margin: "0.5em"}}/>
                            </Drawer>
                        </Box>
                    </Paper>

                    <Box sx= {{flexGrow: 1, p: 3,
                               width: { sm: `calc(100% - ${drawerWidth}px)` }}}>
                 
                        <Toolbar />
                                   
                        <Typography variant="h1" sx={{textAlign: "center"}}>
                            {params.songTitle}
                        </Typography>

                        <Typography variant="h2" sx={{textAlign: "center"}}>
                            ({the_song.score_data.pedagogical_score_type}
                            &nbsp;
                            {the_song.score_data.meter})
                        </Typography>

                        {songGrid(the_song.score_data.meter)}

                    </Box>
                </Box>
                    
                <Footer />
    
                <Outlet /> 
            </Paper>
        </ThemeProvider>
    );
}

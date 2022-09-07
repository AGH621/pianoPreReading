import React, { useState } from "react";
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


import { Outlet, Link, useParams } from "react-router-dom";
import Footer from '../components/footer';
import { getTitle } from "../js/sort_ped_type";

import SingleA from "../images/notes_key_diagram/single_a.png";
import SingleG from "../images/notes_key_diagram/single_g.png";
import SingleF from "../images/notes_key_diagram/single_f.png";
import SingleC from "../images/notes_key_diagram/single_c.png";
import SingleD from "../images/notes_key_diagram/single_d.png";
import SingleE from "../images/notes_key_diagram/single_e.png";
import SingleBflat from "../images/notes_key_diagram/single_a_sharp.png";
import Rest from "../images/notes_key_diagram/rest.png";

import Arrow from "../images/notes_key_diagram/short_arrow.png";


function oneNote(a_note) {
    let the_pix = [];

    if (a_note === 'mi') {
        /*the_pix.push(<img className="fingerings" src={LfTwo} />)*/
        the_pix.push(<span className="tonic">I</span>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch mi" width="140px" src={SingleA} />)
    }
    else if (a_note === 're') {
        /*the_pix.push(<img className="fingerings" src={LfThree} />)*/
        the_pix.push(<span className="dominant">V7</span>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch re" width="140px" src={SingleG} />)
    }
    else if (a_note === 'do') {
        /*the_pix.push(<img className="fingerings" src={LfFour} />)*/
        the_pix.push(<span className="tonic">I</span>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch do" width="140px" src={SingleF} />)
    }
    else if (a_note === 'sol') {
        /*the_pix.push(<img className="fingerings" src={LfFour} />)*/
        the_pix.push(<span className="dominant">V7</span>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch sol" width="140px" src={SingleC} />)
    }
    else if (a_note === 'la') {
        /*the_pix.push(<img className="fingerings" src={LfFour} />)*/
        the_pix.push(<span className="subdominant">IV</span>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch la" width="140px" src={SingleD} />)
    }
    else if (a_note === 'fa') {
        /*the_pix.push(<img className="fingerings" src={LfFour} />)*/
        the_pix.push(<span className="subdominant">IV</span>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch fa" width="140px" src={SingleBflat} />)
    }
    else if (a_note === 'ti') {
        /*the_pix.push(<img className="fingerings" src={LfFour} />)*/
        the_pix.push(<span className="dominant">V7</span>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch ti" width="140px" src={SingleE} />)
    }
    
    else if (a_note === 'rest') {
        /*the_pix.push(<img className="fingerings" src={LfFour} />)*/
        the_pix.push(<span className="dominant">(Rest)</span>)
        the_pix.push(<br />)
        the_pix.push(<img className="pitch rest" width="140px" src={Rest} />)
    }
    return the_pix
}


function writeSong(a_song) {
    let component_list = [];

    for (let n=0; n<a_song.notes.length; n++) {
        if (a_song.notes[n].duration === 'Tiny') {
            component_list.push(
                <Box>
                    <p class="chord">
                    {oneNote(a_song.notes[n].pitch)}
                    <br />
                    {a_song.notes[n].lyric[0]}
                    </p>
                </Box>
            )}
            else if (a_song.notes[n].duration === 'Short') {
                component_list.push(
                    <Box>
                        <p class="chord">
                        {oneNote(a_song.notes[n].pitch)}
                        <br />
                        {a_song.notes[n].lyric[0]}
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingTop: "2em"}}>
                        <p class="arrow">
                            <br />
                            <img class="lengthen" width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
            }
            else if (a_song.notes[n].duration === 'Kinda_Short') {
                component_list.push(
                    <Box>
                        <p class="chord">
                        {oneNote(a_song.notes[n].pitch)}
                        <br />
                        {a_song.notes[n].lyric[0]}
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingTop: "2em"}}>
                        <p class="arrow">
                            <br />
                            <img class="lengthen" width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                    )
                component_list.push(
                    <Box sx={{paddingTop: "2em"}}>
                        <p class="arrow">
                            <br />
                            <img class="lengthen" width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                    )
            }
            else if (a_song.notes[n].duration === 'Medium') {
                component_list.push(
                    <Box>
                        <p class="chord">
                        {oneNote(a_song.notes[n].pitch)}
                        <br />
                        {a_song.notes[n].lyric[0]}
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingTop: "2em"}}>
                        <p class="arrow">
                            <br />
                            <img class="lengthen" width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingTop: "2em"}}>
                        <p class="arrow">
                            <br />
                            <img class="lengthen" width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingTop: "2em"}}>
                        <p class="arrow">
                            <br />
                            <img class="lengthen" width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
            }
            else if (a_song.notes[n].duration === 'Kinda_Long') {
                component_list.push(
                    <Box>
                        <p class="chord">
                        {oneNote(a_song.notes[n].pitch)}
                        <br />
                        {a_song.notes[n].lyric[0]}
                        </p>
                    </Box>
                    )
                    component_list.push(
                        <Box sx={{paddingTop: "2em"}}>
                            <p class="arrow">
                                <br />
                                <img class="lengthen" width="140px" src={Arrow} />
                                <br />
                            </p>
                        </Box>
                    )
                    component_list.push(
                        <Box sx={{paddingTop: "2em"}}>
                            <p class="arrow">
                                <br />
                                <img class="lengthen" width="140px" src={Arrow} />
                                <br />
                            </p>
                        </Box>
                    )
                    component_list.push(
                        <Box sx={{paddingTop: "2em"}}>
                            <p class="arrow">
                                <br />
                                <img class="lengthen" width="140px" src={Arrow} />
                                <br />
                            </p>
                        </Box>
                    )
                    component_list.push(
                        <Box sx={{paddingTop: "2em"}}>
                            <p class="arrow">
                                <br />
                                <img class="lengthen" width="140px" src={Arrow} />
                                <br />
                            </p>
                        </Box>
                    )
                    component_list.push(
                        <Box sx={{paddingTop: "2em"}}>
                            <p class="arrow">
                                <br />
                                <img class="lengthen" width="140px" src={Arrow} />
                                <br />
                            </p>
                        </Box>
                    )
            }
            else if (a_song.notes[n].duration === 'Long') {
                component_list.push(
                    <Box>
                        <p class="chord">
                        {oneNote(a_song.notes[n].pitch)}
                        <br />
                        {a_song.notes[n].lyric[0]}
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingTop: "2em"}}>
                        <p class="arrow">
                            <br />
                            <img class="lengthen" width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingTop: "2em"}}>
                        <p class="arrow">
                            <br />
                            <img class="lengthen" width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingTop: "2em"}}>
                        <p class="arrow">
                            <br />
                            <img class="lengthen" width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingTop: "2em"}}>
                        <p class="arrow">
                            <br />
                            <img class="lengthen" width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingTop: "2em"}}>
                        <p class="arrow">
                            <br />
                            <img class="lengthen" width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingTop: "2em"}}>
                        <p class="arrow">
                            <br />
                            <img class="lengthen" width="140px" src={Arrow} />
                            <br />
                        </p>
                    </Box>
                )
                component_list.push(
                    <Box sx={{paddingTop: "2em"}}>
                        <p class="arrow">
                            <br />
                            <img class="lengthen" width="140px" src={Arrow} />
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
    
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    
    /*let [melValue, melSetButton] = useState("melody-button-active");*/
    
    return (
        <Grid position="relative">
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Box component="nav" sx={{ width: { sm: drawerWidth }, 
                                           flexShrink: { sm: 0 } }}
                >
                    <Toolbar style={{marginTop: "3rem" }}>
                        <IconButton color="inherit" onClick={handleDrawerOpen} edge="start">
                            <MenuIcon />
                        </IconButton>
                                       
                        <Typography variant="h6" noWrap>
                         Views
                        </Typography>
                    </Toolbar>
                                       
                    <Divider />

                    <Drawer PaperProps={{ sx: {marginTop: "3em",
                                               width: "240px",
                                               height: "750px"
                                               }
                                       }} 
                            variant="persistent" anchor="left" open={open}
                            sx={{display: { xs: 'block', 
                                            sm: 'block' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', 
                                                        width: drawerWidth },
                                }}
                    >
                        <Toolbar>
                            <Typography variant="h6" noWrap>
                                Views
                            </Typography>
                    
                            <IconButton color="inherit" onClick={handleDrawerClose} edge="end">
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                
                        <Divider />  

                        <FormControl sx={{marginLeft: "3em"}}>
                            <RadioGroup aria-labelledby="demo-radio-buttons-group-label"
                                        name="radio-buttons-group"
                            >
                                {['View 1', 'View 2', 'View 3', 'View 4'].map((text, index) => (
                                    <FormControlLabel value={text} control={<Radio />} label={text} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </Drawer>
                </Box>
            
                <Box component="main" sx= {{flexGrow: 1, p: 3,
                                            width: { sm: `calc(100% - ${drawerWidth}px)` }}}
                >
                    <Toolbar />
                                        
                    <Typography variant="h1">
                        {params.songTitle}
                    </Typography>
                
                    <Grid container>
                        <Box sx={{marginRight: "5em"}}>
                            <Typography variant="body1">
                                {the_song.score_data.pedagogical_score_type}
                            </Typography>
                        </Box>
                        <Box sx={{marginRight: "5em"}}>
                        <Typography variant="body1">
                            {the_song.score_data.meter}
                        </Typography>
                        </Box>    
                    </Grid>
                    
                    <Grid sx={{ flexGrow: 1,
                                marginTop: "1em"}}  spacing={2}
                    >
                        <Grid container>
                            {writeSong(the_song).map((value) => (
                                <Box sx={{margin: "1em"}}>
                                    {value}
                                </Box>
                            ))}
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Footer />

            <Outlet />
        </Grid>
    );
}

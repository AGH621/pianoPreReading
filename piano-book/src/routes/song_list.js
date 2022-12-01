/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 3.0
Description: The page component to browse all the songs in alphabetical order.
*/

//External imports
import * as React from 'react';
import { Box,
         Button,
         Divider,
         Grid,
         List,
         ListItem,
         ListItemButton,
         ListItemText,
         Paper,
         ThemeProvider,
         Typography } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { Outlet, Link } from "react-router-dom";

//Internal imports
import Footer from '../components/footer';
import returnTopFab from '../components/app_returntop';
import FreeSolo from '../components/app_filter_search';
import { allTitles } from "../js/sort_ped_type";
import { theme } from '../siteTheme.js'

//The Latin alaphabet in array form. We will need this later in a couple places.
const Alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// 
function alphaSongs(letter) {
/*
    Input: An initial letter
    Process: Take all the songs starting with the initial letter, turn each into a link, and put it in a list.
    Output: A multi-column list of buttons linking to individual song pages.
*/    
    //Get all the song titles as an array.
    let song_data = allTitles();

    //Map the titles. Does the title start with the desired letter? Then make a list button out of the title.
    //If not, do nothing. 
    return (
        <List>
            <Masonry columns={4} spacing={0.75}>
                {song_data.map((song) => (song.startsWith(letter) ?
                    <ListItem key={song} disablePadding>
                        <ListItemButton to={`/${song}`} key={song}>
                            
                            <ListItemText primary={song}/>
                            
                        </ListItemButton>
                    </ListItem>
                    :null
                ))}
            </Masonry>
        </List>
    )
}

// Render the page.
export default function SongList() {
    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{backgroundColor: "backgrounds.nav"}}>
            
                <Box sx={{padding: "5em"}}>
                    <Typography variant="h1">
                        Song List
                    </Typography>

                    {/* Create the letter buttons which jump to the section headed by the same letter. */}
                    <Box sx={{ flexGrow: 1,
                               marginTop: "5em",
                    }}>
                        <Grid container spacing={{ xs: 2, md: 2 }}>
                            {Alphabet.map((Alphabet) => (
                                <Grid item key={Alphabet}>
                                    <Button variant="outlined" size="large" href={`#${Alphabet}`} sx={{borderColor:"primary.dark",
                                                                                                      '&:hover': {backgroundColor: "primary.light", 
                                                                                                                  borderColor:"primary.dark"}}}>
                                        <Typography variant="h6" color="primary.dark">{Alphabet}</Typography>
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>

                        <Divider sx={{margin: "2em"}}/>
                    </Box>

                    {/*Iterate through the alphabet array and create a section headed by each letter. If there are songs starting with that letter, 
                        render them by calling the alphaSongs function */}
                        {Alphabet.map((alphabet) => (
                        <Box>  
                            <Typography variant="h2" id={`${alphabet}`} sx={{marginLeft: '0.35em'}}>
                                {alphabet}
                            </Typography>
                            <Typography id={`${alphabet}`} color="primary.dark" sx={{fontSize: 72}}>
                                {alphaSongs(alphabet)}
                            </Typography>
                                <Divider sx={{margin: "0.5em"}}/> 
                        </Box>
                        ))}

                {/* Floating action button to return to the top of the page. */}
                {returnTopFab()}
                
                </Box>
                
                <Footer />
            
                <Outlet />
            </Paper>
        </ThemeProvider>    
    );
}

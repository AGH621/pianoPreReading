/*
Drawer
Created by: Anne Hamill
Created on: 25 August 2022
Version: 3.0
Description: An MUI Drawer component which will be populated by the titles of the songs
in each pedagogical type.
*/

//External imports
import * as React from 'react';
import { Box,
         Divider,
         Drawer,
         Grid,
         IconButton,
         List,
         ListItem,
         ListItemButton,
         ListItemText,
         ThemeProvider,
         Toolbar,
         Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

//Internal imports
import { theme } from '../siteTheme.js';

//Default drawer width
const drawerWidth = 310;


export function songDrawer(song_data, the_page) {
/*
    Drawer component for side navagation.  Either song titles within a unit, or variant views
    of a song.
*/
    //Used for opening/closing the drawer. Never implemented.
    // const [open, setOpen] = React.useState(true);
    //
    // const handleDrawerOpen = () => {
    //   setOpen(true);
    // };
    //
    // const handleDrawerClose = () => {
    //   setOpen(false);
    // };
    
    function backGround(a_page) {
        /*
            Make the drawer background color the same as the page's.
            TODO: Repeated in other places, make it spin-off and import.
        */
        switch(a_page) {
            case 'three_note':
                return {backgroundColor: "backgrounds.threeNote", 
                        marginTop: "3em",
                        marginBottom: "5em",
                        width: "240px",
                        height: "1000px"}
                break;
            case 'four_note':
                return {backgroundColor: "backgrounds.fourNote", 
                        marginTop: "3em",
                        marginBottom: "5em",
                        width: "240px",
                        height: "1000px"}
                break;
            case 'five_finger':
                return {backgroundColor: "backgrounds.fiveFinger", 
                        marginTop: "3em",
                        marginBottom: "5em",
                        width: "240px",
                        height: "1000px"}
                break;
            case 'pentatonic':
                return {backgroundColor: "backgrounds.pentatonic", 
                        marginTop: "3em",
                        marginBottom: "5em",
                        width: "240px",
                        height: "1000px"}
                break;
            case 'diatonic':
                return {backgroundColor: "backgrounds.diatonic", 
                        marginTop: "3em",
                        marginBottom: "5em",
                        width: "240px",
                        height: "1000px"}
                break;
            case 'minor':
                return {backgroundColor: "backgrounds.minor", 
                        marginTop: "3em",
                        marginBottom: "5em",
                        width: "240px",
                        height: "1000px"}
                break;
            default:
                return {backgroundColor: "backgrounds.nav", 
                        marginTop: "3em",
                        marginBottom: "5em",
                        width: "240px",
                        height: "1000px"}
                break;
        }
    }
    
    function drawerTitle(a_title) {
        /*
            Give the song page drawer's a title matching the page.
        */
        switch(a_title) {
        case 'three_note':
            return "Three Note Titles" 
            break;
        case 'four_note':
            return "Four Note Titles"
            break;
        case 'five_finger':
            return "Five Finger Titles"
            break;
        case 'pentatonic':
            return "Pentatonic Titles"
            break;
        case 'diatonic':
            return "Diatonic Titles"
            break;
        case 'minor':
            return "Minor Titles"
            break;
        default:
            return "Song Titles"
            break;
        }
    };
    
    //Render the drawer.
    return (
        <ThemeProvider theme={theme}>
            <Box component="nav"
                 sx={{ width: { sm: drawerWidth }, 
                       flexShrink: { sm: 0 },
                    }}>
                <Divider />

                <Drawer PaperProps={{ sx: backGround(the_page) }} 
                        variant="permanent" anchor="left" open={open}
                        sx={{ display: { xs: 'block', sm: 'block' },
                              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                           }}>
                    
                    <Toolbar sx={{marginTop: "0.5em",
                       marginBottom: "0.25em"}}>
                        <Typography variant="h4">
                            {drawerTitle(the_page)}
                        </Typography>
                    </Toolbar>

                    <Divider />
          
                    <List sx={{marginBottom: "5em"}}>
                        {song_data.map((song) => (
                            <ListItem key={song} disablePadding>
                                <ListItemButton to={`/song_list/${song}`} key={song}>
                                    <ListItemText primary={song} sx={{color: "primary.dark"}}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Box>
        </ThemeProvider>   
    );
}
        
        
          
          
          
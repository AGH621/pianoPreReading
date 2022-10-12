/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 0.3
Description: An MUI Drawer component which will be populated by the titles of the songs
in each pedagogical type.

TODO: 1) Make more dynamic
            a) drawer height = length of song list
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
import { theme } from '../siteTheme.js';


const drawerWidth = 310;
export function songDrawer(song_data, the_page) {
    const [open, setOpen] = React.useState(true);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    
    function backGround(a_page) {
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
            return "Pentatonic"
            break;
        case 'diatonic':
            return "Diatonic"
            break;
        case 'minor':
            return "Minor"
            break;
        default:
            return "Song Titles"
            break;
        }
    };
    
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
                    
                    <Toolbar sx={{marginTop: "1em",
                       marginBottom: "0.75em"}}>
                        <Typography variant="h4">
                            {drawerTitle(the_page)}
                        </Typography>
                    </Toolbar>

                    <Divider />
          
                    <List>
                        {song_data.map((song) => (
                            <ListItem key={song} disablePadding>
                                <ListItemButton to={`/${song}`} key={song}>
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
        
        
          
          
          

import React from "react";
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
import ListItem from "@mui/material/ListItem";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from "@mui/material/ListItemText";

import { Outlet, Link } from "react-router-dom";
import Footer from '../components/footer';
import appAccordian from '../components/app_accordian';
import { songDrawer } from '../components/app_drawer';
import { pentatonicTitles } from "../js/sort_ped_type";
import { teacherTextPent, studentTextPent } from '../js/pentatonic_text';

const drawerWidth = 240;
export default function Pentatonic() {  
    const song_data = pentatonicTitles();
    const drawer = songDrawer(song_data);

    return (
        <Grid position="relative">
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                {drawer}       

                <Box
                component="main"
                sx= {{flexGrow: 1, p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` }}}
                >
                    <Toolbar />
                    
                    <Typography variant="h1">Pentatonic</Typography>
                    
                    <Typography paragraph>
                        We continue to build on the foundation provided by earlier units.  Don&#39;t forget to go back to earlier units and apply new skills
                        to older songs.
                    </Typography>
                    
                    <Typography variant="h3">What&#39;s New?</Typography>
                    
                    <Typography variant="h4">Notes</Typography>
                    <Typography paragraph>
                        Stretching out to reach the sixth note of the major scale.  These songs do not use the fourth note of the major scale, so 
                        Finger 4 plays the fifth note, and Finger 5 plays the 6th note
                    </Typography>
                    
                    <Typography variant="h4">Notation</Typography>
                    <Typography paragraph>
                        The symbolic keyboard notation is now being replaced with colored rhythmic notation.  The color of the notes is the same as it
                        was in the keyboard notation.  A small keyboard diagram indicating which note is which color is included with each piece.
                    </Typography>
                    
                    <Typography variant="h4">Chords</Typography>
                    <Typography paragraph>
                        Repeated chord symbols have been eliminated. Keep repeating the previous chord, until a new one is reached.
                    </Typography>
                    
                    {appAccordian(teacherTextPent(), studentTextPent())}
                </Box>               
            </Box>
            <Footer />
            <Outlet />                        
        </Grid>            
    );
}

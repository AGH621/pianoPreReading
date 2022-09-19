
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
import { teacherTextFour, studentTextFour } from '../js/four_note_text';

import { fourNoteTitles } from "../js/sort_ped_type";

const drawerWidth = 240;
export default function FourNote() {  
    const song_data = fourNoteTitles();
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
                    
                    <Typography variant="h1"> 4 Note Songs</Typography>
                    
                    <Typography paragraph>
                        These are slightly more complex that the 3 Note songs (see below for details), but still use symbolic notation
                    </Typography>
                    
                    <Typography variant="h3">
                        New Concepts
                    </Typography>
                    
                    <Typography paragraph>
                        In addition to all the concepts taught in the 3 Note songs, this unit adds the following:
                        Fifth note of the major scale.
                        Symbolic equivalent of quarter rests in duple meter.
                        Symbolic equivalent of dotted quarter rests in triple meter.
                        Full tonic and dominant chords using three notes
                    </Typography>
                    
                    {appAccordian(teacherTextFour, studentTextFour)}
                </Box>               
            </Box>
            <Footer />
            <Outlet />                        
        </Grid>            
    );
}

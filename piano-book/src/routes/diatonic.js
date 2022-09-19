
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
import { teacherTextDia, studentTextDia} from '../js/diatonic_text';

import { diatonicTitles } from "../js/sort_ped_type";

const drawerWidth = 240;
export default function Diatonic() {  
    const song_data = diatonicTitles();
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
                    <Typography variant="h1">Diatonic</Typography>
                    
                    <Typography paragraph>
                        We continue to build on the foundation provided by earlier units.  Don%#39;t forget to go back to earlier units and apply new skills
                        to older songs.
                    </Typography>
                    
                    <Typography variant="h3">What&#39;s New?</Typography>
                    
                    <Typography variant="h4">Notes</Typography>
                    <Typography paragraph>
                        All of the first six notes of the major scale appear together for the first time.  This means that right hand finger 5 and left hand finger
                        1 are now responsible for two different notes.
                    </Typography>
                    
                    <Typography variant="h4">Transposition</Typography>
                    <Typography paragraph>
                        Students should play the songs in D and A positions in addition to the ones introduced in previous units.  Transposition needs to be done
                        "by ear", songs will continue to be notated in F and F# positions only.
                    </Typography>
                    
                    <Typography variant="h4">Chords</Typography>
                    <Typography paragraph>
                        Eliminate all chord repetition.  Strike the current chord once and hold it without restriking, until a new chord is reached.
                    </Typography>
                    
                    {appAccordian(teacherTextDia, studentTextDia)}
                </Box>               
            </Box>
            <Footer />
            <Outlet />                        
        </Grid>            
    );
}

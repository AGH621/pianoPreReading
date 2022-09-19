
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
import { teacherTextMinor, studentTextMinor } from '../js/minor_text';

import { minorTitles } from "../js/sort_ped_type";

const drawerWidth = 240;
export default function Minor() {  
    const song_data = minorTitles();
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
                    
                    <Typography variant="h1">Minor</Typography>
                    
                    <Typography paragraph>
                        We continue to build on the foundation provided by earlier units. Try transposing the major songs in the previous units into the minor mode.
                    </Typography>
                    
                    <Typography variant="h3">What&#39;s New?</Typography>
                    
                    <Typography variant="h4">Mode</Typography>
                    <Typography paragraph>
                        These songs are all in the minor mode, meaning a new placement for both left and right hand finger 3.
                    </Typography>
                    
                    <Typography variant="h4">Transposition</Typography>
                    <Typography paragraph>
                        Students should play the songs in D and A positions in addition to the ones introduced in previous units.  Transposition needs to be done
                        "by ear", songs will continue to be notated in F and F# positions only.
                    </Typography>
                    
                    <Typography variant="h4">Chords</Typography>
                    <Typography paragraph>
                        The minor versions of the tonic (i) and subdominant (iv). We will continue to use the dominant seventh as is.
                    </Typography>
                    
                    {appAccordian(teacherTextMinor, studentTextMinor)}
                </Box>               
            </Box>
            <Footer />
            <Outlet />                        
        </Grid>            
    );
}

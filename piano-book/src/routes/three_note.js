/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 0.2
Description: Pedagogical-type page React component.  Built with MUI Accordian and Drawer components. 
The drawer component uses react-router links to the 3-Note songs found in the ScoreDefs JSON file 
imported from the backend.

TODO: 
    1) Make the drawer and text into a React components.
    2) Override MUI styles on all components.   
*/


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Outlet, Link } from "react-router-dom";

import Footer from '../components/footer';
import appAccordian from '../components/app_accordian';
import songList from '../components/app_drawer';
import teacherText from '../data/home_page/home_teacher.txt';
import studentText from '../data/home_page/home_student.txt';

const drawerWidth = 240;



export default function ThreeNote(props) {
    //Note: "props" function argument and the line below are required for correct rendering. Do not understand the mechanism at work. Fails silently when 
    //moved to a separate module and imported.
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = songList();
  
    /*
    const drawer = (
          <div>
            <Typography variant="h3" style={{padding: "1rem" }}>
                Song List
            </Typography>
            <Divider />
            <List>
              {['Song 1', 'Song 2', 'Song 3', 'Song 4'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton to={`/`} key={text}>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        );*/
    
  
    const container = window !== undefined ? () => window().document.body : undefined;
  

  return (
    <Grid position="relative">  
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
             component="nav"
             sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
           >
             
             <Drawer
             PaperProps={{
                 sx: {
                     marginTop: "3em"
                 }
               }}
               container={container}
               variant="temporary"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                 keepMounted: true, // Better open performance on mobile.
               }}
               sx={{
                 display: { xs: 'block', sm: 'none' },
                 '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
               }}
             >
               {drawer}
             </Drawer>
             <Drawer
               PaperProps={{
                   sx: {
                       marginTop: "3em",
                   }
                 }}
               variant="permanent"
               sx={{
                 display: { xs: 'none', sm: 'block' },
                 '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
               }}
               open
             >
               {drawer}
             </Drawer>
           </Box>
     
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }}}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        {appAccordian(teacherText, studentText)}
      </Box>
      
    </Box> 
      <Footer /> 
      <Outlet />   
    </Grid>
  );
}





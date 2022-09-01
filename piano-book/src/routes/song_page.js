import * as React from 'react';
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


const drawerWidth = 240;

export default function SongPage() {
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
      <Grid position="relative">
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
              <Box
               component="nav"
               sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
               >
               <Toolbar style={{marginTop: "3rem" }}>
               
               <IconButton color="inherit" onClick={handleDrawerOpen} edge="start">
                <MenuIcon />
               </IconButton>
               
               <Typography variant="h6" noWrap>
                Song List
               </Typography>
               
               </Toolbar>
               <Divider />
     
      <Drawer 
          PaperProps={{
                 sx: {
                     marginTop: "3em",
                     width: "240px",
                     height: "750px"
                 }
               }} 
          variant="persistent" anchor="left" open={open}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          >
       <Toolbar>
       <Typography variant="h6" noWrap>
        Song List
       </Typography>
       <IconButton color="inherit" onClick={handleDrawerClose} edge="end">
        <CloseIcon />
       </IconButton>
       </Toolbar>
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
      </Drawer>
    </Box>           
      {/*
      <main style={{ marginLeft: 300 }}>
              <Typography paragraph>Lorem ipsum dolor sit amet</Typography>
              <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit
              </Typography>
            </main>*/}
        <Box
          component="main"
          sx= {{flexGrow: 1, p: 3,
                width: { sm: `calc(100% - ${drawerWidth}px)` }}}
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
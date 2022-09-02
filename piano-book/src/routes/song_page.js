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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Outlet, Link } from "react-router-dom";
import Footer from '../components/footer';
import ImgMediaCard from '../components/app_cardgrid';


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
                Views
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
        Views
       </Typography>
       <IconButton color="inherit" onClick={handleDrawerClose} edge="end">
        <CloseIcon />
       </IconButton>
       </Toolbar>
       <Divider />  
        <List>
         
        </List>
        <FormControl sx={{
            marginLeft: "3em"
        }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                  {['View 1', 'View 2', 'View 3', 'View 4'].map((text, index) => (
                    <FormControlLabel value={text} control={<Radio />} label={text} />
            
                  ))}
              </RadioGroup>
            </FormControl>
      </Drawer>
    </Box>
        <Box
          component="main"
          sx= {{flexGrow: 1, p: 3,
                width: { sm: `calc(100% - ${drawerWidth}px)` }}}
        >
          <Toolbar />
          <Typography variant="h1">
            Song Title
          </Typography>
                <Grid sx={{ flexGrow: 1,
                            marginTop: "1em"}} container spacing={2}>
                  <Grid container>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32].map((value) => (
                        <Box
                        sx={{margin: "1em"}}>
                        {ImgMediaCard()}
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
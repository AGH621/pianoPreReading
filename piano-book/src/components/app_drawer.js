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


const drawerWidth = 240;
export function songDrawer(song_data) {
    const [open, setOpen] = React.useState(true);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    
    return(
    <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Toolbar style={{marginTop: "3rem" }}>

        <IconButton color="inherit" onClick={handleDrawerOpen} edge="start">
            <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap>
            Songs in this Unit
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
                    Songs in this Unit
                </Typography>
                <IconButton color="inherit" onClick={handleDrawerClose} edge="end">
                    <CloseIcon />
                </IconButton>
            </Toolbar>
        
            <Divider />
          
            <List>
            {song_data.map((song) => (
                <ListItem key={song} disablePadding>
                    <ListItemButton to={`/${song}`} key={song}>
                        <ListItemText primary={song} />
                    </ListItemButton>
                </ListItem>
            ))}
            </List>
        </Drawer>
    </Box>    
    );
}
        
        
          
          
          
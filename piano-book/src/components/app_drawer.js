import * as React from 'react';
import { Box,
         Divider,
         Drawer, 
         List,
         ListItem,
         ListItemButton,
         ListItemText,
         Typography
        } from '@mui/material';

/*
const drawerWidth = 240;

interface Props {
  *
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   *
  window?: () => Window;
}

export default function appDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
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
);
}*/
        
        
export default function songList() {
    return (
      <div>
        <Typography variant="body1" style={{padding: "1rem" }}>
            Using Responsive Drawer
        </Typography>
        <Divider />
        <Typography variant="h4" style={{padding: "1rem" }}>
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
    );
}       
        
        
        
        
        
          
          
          
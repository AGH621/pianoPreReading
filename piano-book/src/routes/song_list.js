
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Outlet, Link } from "react-router-dom";
import Footer from '../components/footer';
import returnTopFab from '../components/app_returntop';


const Alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export default function SongList() {
  return (
    <Box>
       <Typography variant="h1" id="top"
      sx={{ marginTop: "1em",
            marginLeft: "2em"}}>
        Song List
      </Typography>
    <Box sx={{ flexGrow: 1,
               margin: "5em",
               height: "12em"}}>
      <Grid container spacing={{ xs: 2, md: 2 }}>
        {Alphabet.map((Alphabet) => (
          <Grid item key={Alphabet}>
            <Button variant="outlined" size="large" href={`#${Alphabet}`}><Typography variant="h6">{Alphabet}</Typography></Button>
          </Grid>
        ))}
      </Grid>
      <Divider 
        sx={{
            marginTop: "2em"
        }}/>
    </Box>
            
    <Box sx={{ paddingTop: "2em"}}>    
       {Alphabet.map((Alphabet) => (<Typography variant="h3" id={`${Alphabet}`}
      sx={{ margin: "1em",
            paddingTop: "1em"}}>
       {Alphabet}
      <Divider sx={{
            marginBottom: "1em"}}/> 
      </Typography>
        ))}
       </Box>
       {returnTopFab()}
       <Footer />
       <Outlet />
    </Box>
  );
}












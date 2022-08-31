/*
import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../components/footer';


export default function Takadimi() {
    return (
        <div>
            <p style={{padding: "10rem" }}>To come to the aid of the party</p>
            <Footer />
            <Outlet />
        </div>
    );
}*/


import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { Outlet } from "react-router-dom";
import Footer from '../components/footer';
import paperGridRow from '../components/app_papergrid';

export default function SpacingGrid() {
    return (
        <Box>
            <Typography variant="h1" sx={{margin: "1em"}}>Ta-Ka-Di-Mi Rhythm Lessons</Typography>
        <Grid sx={{ flexGrow: 1,
                    marginTop: "1em"}} container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" sx={{margin: "1em"}}>Lesson 1</Typography>
            
            {paperGridRow}
            
          </Grid>
          </Grid>
          <Footer />      
            <Outlet />
                </Box>      
    );
}    
  /*
  return (
      <Box>
          <Typography variant="h1" sx={{margin: "1em"}}>Ta-Ka-Di-Mi Rhythm Lessons</Typography>
      <Grid sx={{ flexGrow: 1,
                  marginTop: "1em"}} container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{margin: "1em"}}>Lesson 1</Typography>
          <Grid container justifyContent="center" spacing={2}>
            {[0, 1, 2, 3, 4, 5].map((value) => (
              <Grid key={value} item>
                <Paper
                  sx={{
                    height: 280,
                    width: 200,
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <Divider sx={{marginTop: "2em"}}/>  
        </Grid>
            
      </Grid>
      <Footer />      
        <Outlet />
            </Box>      
    );}*/


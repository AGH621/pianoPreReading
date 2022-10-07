
import * as React from 'react';
import { Box, 
         Grid,
         Paper,
         ThemeProvider,
         Typography, } from '@mui/material';
import { Outlet, Link } from "react-router-dom";

import Footer from '../components/footer';
import paperGridRow from '../components/app_papergrid';
import returnTopFab from '../components/app_returntop';
import { theme } from '../siteTheme.js'

import lesson1 from '../data/takadimi_files/Lesson_1.pdf';

export default function Takadimi() {
    return (
        <Box>
            <Typography variant="h1" sx={{margin: "1em"}}>Ta-Ka-Di-Mi Rhythm Lessons</Typography>
        
      <object
            type="application/pdf"
        data={lesson1}
            width="600"
            height="700"
          >
          </object>
        
        <Grid sx={{ flexGrow: 1,
                    marginTop: "1em"}} container spacing={2}>
          <Grid item xs={12}>
            {[1, 2, 3, 4, 5, 6].map((value) => (
                <Box>
              <Typography variant="h3" sx={{margin: "1em"}}>Lesson {value}</Typography>
                {paperGridRow()}
                </Box>
            ))}
          </Grid>
          </Grid>
            
          
            
            {returnTopFab()}
          <Footer />      
          <Outlet />
          </Box>      
    );
}

/*
<object
      type="application/pdf"
  data={lesson1Page1}
      width="600"
      height="700"
    >
    </object>*/
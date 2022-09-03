
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Outlet, Link } from "react-router-dom";
import Footer from '../components/footer';
import paperGridRow from '../components/app_papergrid';
import returnTopFab from '../components/app_returntop';

import lesson1Page1 from '../data/lesson1_page1.pdf';

export default function Takadimi() {
    return (
        <Box>
            <Typography variant="h1" sx={{margin: "1em"}}>Ta-Ka-Di-Mi Rhythm Lessons</Typography>
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

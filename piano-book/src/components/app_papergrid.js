import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function paperGridRow() {
    return (
        
      <Grid container justifyContent="center" spacing={2}>
        {[0, 1, 2, 3, 4, 5].map((value) => (
          <Grid key={value} item>
            <Paper
              sx={{
                height: 280,
                width: 200,
              }}
            />
              <Divider sx={{marginTop: "2em"}}/>
          </Grid>
        ))}
            
      </Grid>
    );
}
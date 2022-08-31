import * as React from 'react';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';


export default function paperGridRow() {
    return (
    <div>
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
    </div>    
    );
}
/*import * as React from 'react';
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
}*/


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 140 }}>
        <Typography gutterBottom variant="h6" component="div">
          Chord
        </Typography>
      <CardMedia
        component="img"
        alt="keyboard diagram"
        height="140"
        image="https://via.placeholder.com/140"
      />
        <Typography variant="h6" component="div">
          Lyric
        </Typography>
    </Card>
  );
}

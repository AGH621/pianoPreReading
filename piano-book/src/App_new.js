import React from 'react';
import { Outlet } from "react-router-dom";

import { Grid, Box, Tabs, Tab, Link } from '@mui/material';



interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
      <Grid container>
        <Grid xs={3}>
            <Link href="home">Logo/Home</Link>
        </Grid>
        <Grid xs={9}>
          <Tabs value={value} onChange={handleChange} aria-label="basic navigation">
            <LinkTab label="3 Note" href="/three_note" />
            <LinkTab label="4 Note" href="/four_note" />
            <LinkTab label="5 Finger" href="/five_finger" />
            <LinkTab label="Pentatonic" href="/pentatonic" />
            <LinkTab label="Diatonic" href="/diatonic" />
            <LinkTab label="Minor" href="/minor" />
            <LinkTab label="Song List" href="/song_list" />
          </Tabs>
        </Grid>
        <Outlet />
      </Grid>
  );
} 
export default App;
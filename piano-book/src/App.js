/*
Created by: Anne Hamill
Created on: 24 August 2022
Version: 0.2
Description: Application component. Foundation for the front end.   
*/

//External imports
import * as React from "react";
import { Box,
         Tabs,
         Tab, 
         AppBar,
         Typography,
         Grid,
         createTheme,
         ThemeProvider } from "@mui/material";
import { MemoryRouter,
         Route,
         Routes,
         Link,
         matchPath,
         useLocation,
         BrowserRouter,
         HashRouter,} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";

//Our imports
import Home from "./routes/home";
import ThreeNote from "./routes/three_note";
import FourNote from "./routes/four_note";
import FiveFinger from "./routes/five_finger";
import Pentatonic from "./routes/pentatonic";
import Diatonic from "./routes/diatonic";
import Minor from "./routes/minor";
import SongList from "./routes/song_list";
import About from "./routes/about";
import Takadimi from "./routes/takadimi";
import SongPage from "./routes/song_page";
import HowTo from "./routes/how_to";

import { theme } from './siteTheme.js';
import scoreDefs from "./data/score_defs.json";

//Current version to maintain compatability with the backend.
const currentVersion = 3.0;

//These two functions provide functionality for the top navigation tabs.
function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/home">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={["/home"]} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

function useRouteMatch(patterns: readonly []) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

//This is the actual navbar with tabs.
function TopNav() {
    // You need to provide the routes in descendant order.
    // This means that if you have nested routes like: users, users/new, users/edit.
    // Then the order should be ['users/add', 'users/edit', 'users'].
    const routeMatch = useRouteMatch(["/home", "how_to", "/three_note", "/four_note", "/five_finger", "/pentatonic", "/diatonic", "/minor", "/song_list"]);
    const currentTab = routeMatch?.pattern?.path;

    //The minor page has been disabled because Music21 cannot accurately translate minor pieces into solfege syllables.
    return (
        <ThemeProvider theme={theme}>
            <header>
                <AppBar position="fixed" >
                    <Tabs value={currentTab}>
                        <Box>
                            <Tab label="Home" value="/home" to="/home" component={Link} sx={{'&:hover': {backgroundColor: "primary.maxdark", color: "primary.light"}}}/>
                        </Box>
                        <Box sx={{marginLeft:"7em"}}>
                            <Tab label="How To Use" value="/how_to" to="/how_to" component={Link} sx={{'&:hover': {backgroundColor: "primary.maxdark", color: "primary.light"}}}/>
                            <Tab label="3 Note" value="/three_note" to="/three_note" component={Link} sx={{'&:hover': {backgroundColor: "primary.maxdark", color: "primary.light"}}}/>
                            <Tab label="4 Note" value="/four_note" to="/four_note" component={Link} sx={{'&:hover': {backgroundColor: "primary.maxdark", color: "primary.light"}}}/>
                            <Tab label="5 Finger" value="/five_finger" to="/five_finger" component={Link} sx={{'&:hover': {backgroundColor: "primary.maxdark", color: "primary.light"}}}/>
                            <Tab label="Pentatonic" value="/pentatonic" to="/pentatonic" component={Link} sx={{'&:hover': {backgroundColor: "primary.maxdark", color: "primary.light"}}}/>
                            <Tab label="Diatonic" value="/diatonic" to="/diatonic" component={Link} sx={{'&:hover': {backgroundColor: "primary.maxdark", color: "primary.light"}}}/>
                            {/*<Tab label="Minor" value="/minor" to="/minor" component={Link} sx={{'&:hover': {backgroundColor: "primary.maxdark", color: "primary.light"}}}/>*/}
                            <Tab label="Song List" value="/song_list" to="/song_list" component={Link} sx={{'&:hover': {backgroundColor: "primary.maxdark", color: "primary.light"}}}/>
                        </Box>
                    </Tabs>
                </AppBar>
            </header>
        </ThemeProvider>
    );
}

//Routing for all the app links with simple version control.
export default function TabsRouter() {
    if (currentVersion === scoreDefs[Object.keys(scoreDefs)[0]].score_data.score_def_version) {
        return (
            <>
                <TopNav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/how_to" element={<HowTo />} />
                    <Route path="/three_note" element={<ThreeNote />} />
                        <Route path=":songTitle" element={<SongPage />} />
                    <Route path="/four_note" element={<FourNote />} />
                    <Route path="/five_finger" element={<FiveFinger />} />
                    <Route path="/pentatonic" element={<Pentatonic />} />
                    <Route path="/diatonic" element={<Diatonic />} />
                    <Route path="/minor" element={<Minor />} />
                    <Route path="/song_list" element={<SongList />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/takadimi" element={<Takadimi />} />

                    <Route path="*"
                           element={
                                <main style={{ padding: "10rem" }}>
                                  <p>404: This ain&#39;t gonna work. Sorry &#39;bout that.</p>
                                </main>
                           }/>
                </Routes>
            </>
        );
    }

    else {
        console.log('Change currentVersion in App.js immediately!')
        return (
                <Routes>
                    <Route path="*"
                           element={
                                <main style={{ padding: "3rem" }}>
                                    <p>503: Service Unavailable</p>
                                    <p>Piano PreReading Book is being updated. Please check back later.</p>
                                    <p>Thank you!</p>
                                </main>
                           }/>
                </Routes>
        );
    }
}

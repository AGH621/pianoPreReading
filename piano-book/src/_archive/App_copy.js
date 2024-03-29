/*
Created by: Anne Hamill
Created on: 24 August 2022
Version: 0.2
Description: Application component. Foundation for the front end. 

TODO: Override MUI styles on all components.   
*/

//Imports from React, MUI, react-router
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { MemoryRouter,
         Route,
         Routes,
         Link,
         matchPath,
         useLocation,
         BrowserRouter } from "react-router-dom";
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
import Takadimi from "./routes/ta_ka_di_mi";
import SongPage from "./routes/song_page";
import LessonPage from "./routes/takadimi_lesson";


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
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch(["/home", "/three_note", "/four_note", "/five_finger", "/pentatonic", "/diatonic", "/minor", "/song_list"]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <header>
    <AppBar position="fixed">
    <Tabs value={currentTab}>
      <Box>
      <Tab label="Home" value="/home" to="/home" component={Link} />
      <Tab label="3 Note" value="/three_note" to="/three_note" component={Link} />
      <Tab label="4 Note" value="/four_note" to="/four_note" component={Link} />
      <Tab label="5 Finger" value="/five_finger" to="/five_finger" component={Link} />
      <Tab label="Pentatonic" value="/pentatonic" to="/pentatonic" component={Link} />
      <Tab label="Diatonic" value="/diatonic" to="/diatonic" component={Link} />
      <Tab label="Minor" value="/minor" to="/minor" component={Link} />
      <Tab label="Song List" value="/song_list" to="/song_list" component={Link} />
      </Box>
    </Tabs>
    </AppBar>
    </header>
  );
}

//Routing for all the app links
export default function TabsRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/three_note" element={<ThreeNote />} />
              <Route path=":songTitle" element={<SongPage />} />
          <Route path="/four_note" element={<FourNote />} />
          <Route path="/five_finger" element={<FiveFinger />} />
          <Route path="/pentatonic" element={<Pentatonic />} />
          <Route path="/diatonic" element={<Diatonic />} />
          <Route path="/minor" element={<Minor />} />
          <Route path="/song_list" element={<SongList />} />
          <Route path="/about" element={<About />} />
          <Route path="/ta_ka_di_mi" element={<Takadimi />} />
              <Route path="/takadimi_lesson" element={<LessonPage />} />
          <Route path="*"
            element={
              <main style={{ padding: "10rem" }}>
                <p>404: This ain&#39;t gonna work. Sorry &#39;bout that.</p>
              </main>
            }
          />
        </Routes>
        <TopNav />
    </BrowserRouter>
  );
}

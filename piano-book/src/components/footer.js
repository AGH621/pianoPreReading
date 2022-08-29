import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
  BrowserRouter,
  Outlet
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";


import About from "../routes/about";
import Takadimi from "../routes/ta_ka_di_mi";

/*
import SongPage from "./routes/song_page";
import Footer from "./routes/footer";
*/




function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/about">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={["/about"]} initialIndex={0}>
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

export default function Footer() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch(["/about", "/ta_ka_di_mi"]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <footer>
    <AppBar position="relative" 
      sx={{
          zIndex:"1601",
          marginTop: "7.5em"
      }}>
    
    <Tabs value={currentTab}>
      <Box>
      <Typography variant="button" gutterBottom style={{padding: "1rem" }}> Copyright </Typography>
      <Tab label="About" value="/about" to="/about" component={Link} />
      <Tab label="Ta-Ka-Di-Mi" value="/ta_ka_di_mi" to="/ta_ka_di_mi" component={Link} />
      </Box>
    </Tabs>
    
    </AppBar>
    </footer>
  );
}

import * as React from "react";
import { Box,
         Tabs,
         Tab,
         AppBar,
         Grid,
         Typography,
         ThemeProvider } from "@mui/material";
import { MemoryRouter,
         Route,
         Routes,
         Link,
         matchPath,
         useLocation,
         BrowserRouter,
         Outlet } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";


import About from "../routes/about";
import Takadimi from "../routes/ta_ka_di_mi";

import { theme } from '../siteTheme.js'


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
        <ThemeProvider theme={theme}>
            <footer>
                <AppBar position="relative" 
                  sx={{
                      zIndex:"1601",
                      marginTop: "7.5em"
                      }}>
                    <Tabs value={currentTab}>
                        <Box>
                            <Typography variant="button" gutterBottom style={{padding: "1rem" }}> Copyright 2022 Anne G. Hamill </Typography>
                            <Tab label="About" value="/about" to="/about" component={Link} sx={{'&:hover': {backgroundColor: "primary.maxdark", color: "primary.light"}}}/>
                            <Tab label="Ta-Ka-Di-Mi" value="/ta_ka_di_mi" to="/ta_ka_di_mi" component={Link} sx={{'&:hover': {backgroundColor: "primary.maxdark", color: "primary.light"}}}/>
                        </Box>
                    </Tabs>
                </AppBar>
            </footer>
      </ThemeProvider>
  );
}

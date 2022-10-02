/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 0.2
Description: Home page React component.  Build from MUI Accordian component and text files. 

TODO: 
    1) Make the text into a React component.
    2) Override MUI styles on all components.   
*/

//External imports
import React from 'react';
import { Outlet } from "react-router-dom";
import { Typography,
         Grid,
         Link,
         Box,
         Paper,
         ThemeProvider } from '@mui/material';

import { theme } from '../siteTheme.js'

//Internal imports
import introText from '../data/home_page/home_intro.txt';
import { readText } from '../js/read_text';
import { teacherTextHome, studentTextHome } from '../js/home_text';
import appAccordian from '../components/app_accordian';
import Footer from '../components/footer';



//Our home page.
export default function Home() {
    const title = 'home'
    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{backgroundColor: "backgrounds.nav"}}>
                <Box sx={{padding: "5em"}}>
                    <Typography variant="h1">
                        Piano PreReading Book
                    </Typography>
        
                    <Typography variant="body1" sx={{margin: "2em"}}>
                        {readText(introText)}
                    </Typography>

                    {appAccordian(teacherTextHome(), studentTextHome(), title)}
                </Box>
                    
                <Footer />
                    
                <Outlet />
            </Paper>
        </ThemeProvider>    
    );
}
    
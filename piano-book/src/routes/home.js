/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 0.3
Description: Home page React component.  Build from MUI Accordian component and text files. 
*/

//External imports
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Typography,
         Grid,
         Box,
         Paper,
         ThemeProvider } from '@mui/material';
import { Image } from 'mui-image'

//Internal imports
import introText from '../data/home_page/home_intro.txt';
import { readText } from '../js/read_text';
import { teacherTextHome, studentTextHome } from '../js/home_text';
import appAccordian from '../components/app_accordian';
import Footer from '../components/footer';
import bannerPiano from '../images/piano_image.png';
import { theme } from '../siteTheme.js'



//Our home page.
export default function Home() {
    const title = 'home'
    
    return (
        <ThemeProvider theme={theme}>
            <Paper sx={{backgroundColor: "backgrounds.nav"}}>
                <Box sx={{marginTop: "3em",}}>
                    <Image src={bannerPiano} fit="contain" duration={10}/>
                    <Typography variant="h1" sx={{paddingTop: "0.75em",}}>
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
    
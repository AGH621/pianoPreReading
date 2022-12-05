/*
Created by: Anne Hamill
Created on: 4 December
Version: 3.0
Description: How to use the symbolic notation
*/

//External imports
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Typography,
         Grid,
         Box,
         Paper,
         ThemeProvider } from '@mui/material';

//Internal imports
import { readText } from '../js/read_text';
import Footer from '../components/footer';
import { theme } from '../siteTheme.js'



//Tutorial on using symbolic notation.
export default function HowTo() {
    const title = 'how_to'
    
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
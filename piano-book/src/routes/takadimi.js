
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Typography,
         Grid,
         Box,
         Paper,
         ThemeProvider } from '@mui/material';

import { theme } from '../siteTheme.js'

import Footer from '../components/footer';
import paperGridRow from '../components/app_papergrid';
import returnTopFab from '../components/app_returntop';


import lesson1 from '../data/takadimi_files/Lesson_1.pdf';
import lesson2 from '../data/takadimi_files/Lesson_2.pdf';

export default function Takadimi() {
 
    
    return (
            <ThemeProvider>
                <Paper sx={{backgroundColor: "backgrounds.nav"}}>
                    <Box sx={{padding: "5em",
                          height: "750px",}}>
                    
                    
                    <h3>Click on below link to open 
                        PDF file in new tab</h3>
                    <a href={lesson1} target="_blank" 
                        rel="noreferrer">
                        Lesson 1
                    </a> <br></br>
                    <a href={lesson2} target="_blank" 
                        rel="noreferrer">
                        Lesson 2
                    </a>
                
                </Box>
        </Paper>
                <Footer />
        
                <Outlet />
            </ThemeProvider>
        );
}



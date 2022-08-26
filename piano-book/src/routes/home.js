/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 0.2
Description: Home page React component.  Build from MUI Accordian component and text files. 

TODO: Override MUI styles on all components.   
*/

//Import React, react-router, MUI modules.
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Typography,
         Grid} from '@mui/material';

//Import our functions and files.
import introText from '../data/home_page/home_intro.txt';
import teacherText from '../data/home_page/home_teacher.txt';
import studentText from '../data/home_page/home_student.txt';
import {readText} from '../js/read_text';
import appAccordian from '../components/app_accordian';
import Footer from '../components/footer';




//Our home page.
export default function Home() {
    return (
        <Grid>
            <Typography variant="h1" gutterBottom style={{padding: "5rem" }}>
                Piano PreReading Book
            </Typography>
        
            <Typography variant="body1" gutterBottom style={{padding: "5rem" }}>
                {readText(introText)}
            </Typography>

            {appAccordian(teacherText, studentText)}
            <Footer />
            <Outlet />
        </Grid>
        
            
    );
}
    
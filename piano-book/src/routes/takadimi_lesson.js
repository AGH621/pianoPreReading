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
import { Outlet, Link } from "react-router-dom";
import { Typography,
         Grid} from '@mui/material';

//Internal imports
import introText from '../data/home_page/home_intro.txt';
import changeText from '../data/home_page/home_changes.txt';
import {readText} from '../js/read_text';
import appAccordian from '../components/app_accordian';
import Footer from '../components/footer';


//Our home page.
export default function LessonPage() {
    return (
        <Grid>
            
            
            
            <Outlet />
        </Grid>
        
            
    );
}
    
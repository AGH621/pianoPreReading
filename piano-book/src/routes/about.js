/*
Created by: Anne Hamill
Created on: 25 August 2022
Version: 0.2
Description: About page React component. 

TODO: 
    1) Make the text into a React component.
    2) Override MUI styles on all components.   
*/

//External imports
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Typography, Grid } from '@mui/material';

//Internal imports
import Footer from '../components/footer';
import projectHistory from '../data/about_page/project_history.txt';
import technicalDetails from '../data/about_page/technical_details.txt';
import {readText} from '../js/read_text';

//Our About page
export default function About() {
    return (
        <Grid>
            <Typography variant="h1" gutterBottom style={{padding: "5rem" }}>
                About This Project
            </Typography>

            <Typography variant="body1" gutterBottom style={{padding: "5rem" }}>
                Hi There!  I&#39;m Anne Hamill.  Welcome to my first web-development project.  If you would like 
                to know more, please  <a class="in-link" href="mailto: saxmusicology@gmail.com">get in touch</a>
            </Typography>
            
            <Typography variant="h2" gutterBottom style={{padding: "5rem" }}>
                My Background
            </Typography>
        
            <Typography variant="body1" gutterBottom style={{padding: "5rem" }}>
                <p> For the last 20-ish years, I have been a music teacher in public schools, private schools, and in my own studio.  
                My students range from 5 years of age all the way to adults whose children have grown up.  In schools, I have taught 
                band, orchestra, choir, general music, guitar, theory, piano, and computer music.  In my studio, I have had students 
                learning orchestral strings, guitar, piano, woodwinds and brass.</p>
                <br />
                <br />
                <p>Throughout the course of my school teaching, I have been required to write my own curriculum, 
                becoming fascinated with course design along the way.  I have mentored others in writing their 
                own elementary music curriculum, and currently hold the position of Curriculum Director at <a href="https://mfm.org/" target="_blank">Music for Minors</a> where I write lessons for about 40 elementary music teachers.</p>

                <p>Lately I have become interested in computer programming and website development.  
                This site is my first foray into combining my first love, music, with my new love, programming.</p>
            </Typography>
                
            <Typography variant="h2" gutterBottom style={{padding: "5rem" }}>
                Project History
            </Typography>
                
            <Typography variant="body1" gutterBottom style={{padding: "5rem" }}>
                {readText(projectHistory)}
                <br />
                <br />
            </Typography>
       

            <Typography variant="h2" gutterBottom style={{padding: "5rem" }}>
                Technical Details
            </Typography>
        
            <Typography variant="body1" gutterBottom style={{padding: "5rem" }}>
                {readText(technicalDetails)}
                <br />
            </Typography>
            
            <Footer />
            <Outlet />
        </Grid>
    );
}
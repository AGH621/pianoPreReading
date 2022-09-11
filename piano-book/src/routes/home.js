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

import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";


//Internal imports
import introText from '../data/home_page/home_intro.txt';
import changeText from '../data/home_page/home_changes.txt';
import teacherText from '../data/home_page/home_teacher.txt';
import studentText from '../data/home_page/home_student.txt';
import {readText} from '../js/read_text';
import appAccordian from '../components/app_accordian';
import Footer from '../components/footer';


const SearchBar = ({setSearchQuery}) => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Enter a city name"
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>
  </form>
);

const filterData = (query, data) => {
  if (!query) {
    return data;
  } else {
    return data.filter((d) => d.toLowerCase().includes(query));
  }
};

const data = [
    "Paris",
    "London",
    "New York",
    "Tokyo",
    "Berlin",
    "Buenos Aires",
    "Cairo",
    "Canberra",
    "Rio de Janeiro",
    "Dublin"
  ];


//Our home page.
export default function Home() {
    
    const [searchQuery, setSearchQuery] = useState("");
    const dataFiltered = filterData(searchQuery, data);
    
    
    return (
        <Grid>
            <Typography variant="h1" gutterBottom style={{padding: "5rem" }}>
                Piano PreReading Book
            </Typography>
        
            <Typography variant="body1" gutterBottom style={{padding: "5rem" }}>
                {readText(introText)}
                <br />
                <br />
                {readText(changeText)}
            </Typography>

            {appAccordian(teacherText, studentText)}
            
      <div
            style={{
              display: "flex",
              alignSelf: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: 20
            }}
          >
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div style={{ padding: 3 }}>
              {dataFiltered.map((d) => (
                <div
                  className="text"
                  style={{
                    padding: 5,
                    justifyContent: "normal",
                    fontSize: 20,
                    color: "blue",
                    margin: 1,
                    width: "250px",
                    BorderColor: "green",
                    borderWidth: "10px"
                  }}
                  key={d.id}
                >
                  {d}
                </div>
              ))}
            </div>
          </div>
            
            
            <Footer />
            
            <Outlet />
        </Grid>
        
            
    );
}
    
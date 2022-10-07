import React from 'react';
import { createTheme,
         ThemeProvider } from "@mui/material";
 
   
const font = "'Nunito', sans-serif";  
         
export const theme = createTheme({
    palette: {
      primary: {
          light: '#AEEEE1',
          main: '#51C1AB',
          dark: '#18957D',
          maxdark: "#005C4A"
      },
      secondary: {
        light: '#B8C0F1',
        main: '#6371C9',
        dark: '#2B3BA0'
      },
      backgrounds: {
          nav: '#F2F4F3',
          threeNote: '#E5EDFB',
          fourNote: '#FFF2E6',
          fiveFinger: '#FFFDE6',
          pentatonic: '#F8FEE5',
          diatonic: '#E2FBF5',
          minor: '#EBFDE4'
      }
    },
    
    typography: {
        fontFamily: font,
        h1: {
            fontFamily: 'Rokkitt',
            fontSize: '4.75rem',
            fontWeight: 600,
            textAlign: 'center'
        },
        h2: {
            fontFamily: 'Rokkitt',
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        h3: {
            fontFamily: 'Rokkitt',
            fontSize: '2rem',
            fontWeight: 500,
        },
        h4: {
            fontFamily: 'Rokkitt',
            fontSize: '1.75rem',
            fontWeight: 600
        },
        h5: {
            fontFamily: 'Rokkitt',
            fontSize: '1.5rem',
            fontWeight: 600
        },
        body1: {
            fontSize: '1.25rem',
        },
        accordHead: {
            fontSize: '1.5rem',
            fontWeight: 600,
            textDecoration: 'underline'
        },
        lyric: {
            fontSize: '1.5rem',
        },
        chord: {
            fontFamily: 'Rokkitt',
            fontSize: '2.25rem',
        },
        
        
    },
  });         
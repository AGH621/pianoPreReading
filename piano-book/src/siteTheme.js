import React from 'react';
import { createTheme,
         ThemeProvider } from "@mui/material";
 
const head_fonts = `'Apple Chancery', 'Tangerine', 'cursive'`
                
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
          /*nav: '#F2F4F3',*/
          /*nav: '#FBF3EB',*/
          nav: '#FBF3EB',
          threeNote: '#E5EDFB',
          fourNote: '#FFF2E6',
          fiveFinger: '#FFFDE6',
          pentatonic: '#F8FEE5',
          diatonic: '#E2FBF5',
          minor: '#EBFDE4',
          
          /*
              complimentary colors
              nav: '#FBF3EB',
              #E5FBE8
              #FBE5F8
              #E5EDFB
              #F3E5FB
              #E5FBF3
              #A4B4AE
          
              #3b8d7d  ==>  possible font color
              
              nav: '#e5ded7',
              #D7E5D7
              #E5D7DE
              #ded7e5
              #d7dee5
              #e5d7e5
          */
      }
    },
    
    typography: {
        h1: {
            fontFamily: head_fonts,
            fontSize: '5rem',
            fontWeight: 600,
            textAlign: 'center'
        },
        h2: {
            fontFamily: head_fonts,
            fontSize: '3rem',
            fontWeight: 800,
        },
        h3: {
            fontFamily: head_fonts,
            fontSize: '2em',
            fontWeight: 600,
        },
        h4: {
            fontFamily: head_fonts,
            fontSize: '2rem',
            fontWeight: 700
        },
        h5: {
            fontFamily: head_fonts,
            fontSize: '1.5rem',
            fontWeight: 600
        },
        body1: {
            fontFamily: 'Quicksand',
            fontSize: '1.5rem',
            fontWeight: 400,
        },
        body2: {
            fontFamily: 'Quicksand',
            fontSize: '1.5rem',
            fontWeight: 400,
        },
        accordHead: {
            fontFamily: 'Quicksand',
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
            fontWeight: 300,
        },
    },
  });         
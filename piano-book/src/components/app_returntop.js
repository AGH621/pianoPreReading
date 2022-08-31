import * as React from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function returnTopFab () {
    return (
        <Fab href="#top" color="primary" aria-label="Return to top"
        sx={{
            margin: 0,
            top: "auto",
            right: 30,
            bottom: 50,
            left: "auto",
            position: "fixed"
        }}>
           <KeyboardArrowUpIcon />
        </Fab>
    );
}
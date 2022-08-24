import React from 'react';
import { Outlet } from "react-router-dom";

import { Grid, Box, Tabs, Tab, Link } from '@mui/material';



export default function Home() {
    return (
        <div>
            <p>How now brown cow?</p>
            <Outlet />
        </div>
    );
}
    
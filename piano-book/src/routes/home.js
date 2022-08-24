import React from 'react';
import { Link, Outlet } from "react-router-dom";

import { Grid, Box, Tabs, Tab } from '@mui/material';



export default function Home() {
    return (
        <div>
            <p>How now brown cow?</p>
            <Outlet />
        </div>
    );
}
    
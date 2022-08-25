import React from 'react';
import { Outlet as RROutlet, Link as RRLink } from "react-router-dom";


export default function SongList() {
    return (
        <div>
            <p style={{padding: "10rem" }}>Jack and Jill went up the hill</p>
            <RROutlet />
        </div>
    );
}
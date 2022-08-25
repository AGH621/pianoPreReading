import React from 'react';
import { Outlet as RROutlet, Link as RRLink } from "react-router-dom";


export default function Pentatonic() {
    return (
        <div>
            <p style={{padding: "10rem" }}>Humpty Dumpty sat on a wall</p>
            <RROutlet />
        </div>
    );
}
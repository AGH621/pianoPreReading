import React from 'react';
import { Outlet as RROutlet, Link as RRLink } from "react-router-dom";


export default function Diatonic() {
    return (
        <div>
            <p style={{padding: "10rem" }}>Hey diddle diddle</p>
            <RROutlet />
        </div>
    );
}
import React from 'react';
import { Outlet as RROutlet, Link as RRLink } from "react-router-dom";


export default function Minor() {
    return (
        <div>
            <p style={{padding: "10rem" }}>Hickory Dickory Doc</p>
            <RROutlet />
        </div>
    );
}
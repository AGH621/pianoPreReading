import React from 'react';
import { Outlet as RROutlet, Link as RRLink } from "react-router-dom";


export default function FourNote() {
    return (
        <div>
            <p style={{padding: "10rem" }}>Mary Mary quite contrary</p>
            <RROutlet />
        </div>
    );
}
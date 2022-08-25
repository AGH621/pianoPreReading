import React from 'react';
import { Outlet as RROutlet, Link as RRLink } from "react-router-dom";


export default function FiveFinger() {
    return (
        <div>
            <p style={{padding: "10rem" }}>Jack Sprat ate no fat</p>
            <RROutlet />
        </div>
    );
}
import React from 'react';
import { Outlet as RROutlet, Link as RRLink } from "react-router-dom";


export default function ThreeNote() {
    return (
        <div>
            <p style={{padding: "10rem" }}>The cow jumped over the moon</p>
            <RROutlet />
        </div>
    );
}
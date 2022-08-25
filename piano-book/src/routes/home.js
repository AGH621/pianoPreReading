import React from 'react';
import { Outlet as RROutlet, Link as RRLink } from "react-router-dom";





export default function Home() {
    return (
        <div>
            <p style={{padding: "10rem" }}>How now brown cow?</p>
            <RROutlet />
        </div>
    );
}
    
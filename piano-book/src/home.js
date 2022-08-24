import React from 'react';
import { Outlet as RrdOutlet } from "react-router-dom";





export default function Home() {
    return (
        <div>
            <p>How now brown cow?</p>
            <RrdOutlet />
        </div>
    );
}
    
import React from 'react';
import { Link, Outlet } from "react-router-dom";

import "../css/css_reset.css";
import "../css/text_style.css";
import "../css/nav_style.css";
import "../css/note_style.css"


export default function ThreeNote() {
    return (
        <div>
            <ul>
                <li>Hot Cross Buns</li>
                <li>Au Claire de la Lune</li>
                <li>Frog in the Meadow</li>
            </ul>
            <Outlet />
        </div>
    );
}
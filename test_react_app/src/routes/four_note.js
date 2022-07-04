import React from 'react';
import { Link, Outlet } from "react-router-dom";


export default function FourNote() {
    return (
        <div>
            <ul>
                <li>Old Aunt Dinah</li>
                <li>I Have a Dog</li>
                <li>Bells in the Steeple</li>
            </ul>
            <Outlet />
        </div>
    );
}
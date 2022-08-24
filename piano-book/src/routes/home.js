import React from 'react';
import { Link, Outlet } from "react-router-dom";





export default function Home() {
    return (
        <div>
            <p>How now brown cow?</p>
            <Outlet />
        </div>
    );
}
    
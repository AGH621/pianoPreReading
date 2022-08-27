import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../components/footer';


export default function Pentatonic() {
    return (
        <div>
            <p style={{padding: "10rem" }}>Humpty Dumpty sat on a wall</p>
            <Footer />
            <Outlet />
        </div>
    );
}
import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../components/footer';


export default function Diatonic() {
    return (
        <div>
            <p style={{padding: "10rem" }}>Hey diddle diddle</p>
            <Footer />
            <Outlet />
        </div>
    );
}
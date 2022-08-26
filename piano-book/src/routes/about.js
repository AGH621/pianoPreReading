import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../components/footer';


export default function About() {
    return (
        <div>
            <p style={{padding: "10rem" }}>Now is the time for all good men</p>
            <Footer />
            <Outlet />
        </div>
    );
}
import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../components/footer';


export default function Minor() {
    return (
        <div>
            <p style={{padding: "10rem" }}>Hickory Dickory Doc</p>
            <Footer />
            <Outlet />
        </div>
    );
}
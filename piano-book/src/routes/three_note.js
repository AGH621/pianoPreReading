import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../components/footer';

export default function ThreeNote() {
    return (
        <div>
            <p style={{padding: "10rem" }}>The cow jumped over the moon</p>
            <Footer />
            <Outlet />
        </div>
    );
}
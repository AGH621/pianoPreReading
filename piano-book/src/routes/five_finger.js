import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../components/footer';

export default function FiveFinger() {
    return (
        <div>
            <p style={{padding: "10rem" }}>Jack Sprat ate no fat</p>
            <Footer />
            <Outlet />
        </div>
    );
}
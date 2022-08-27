import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../components/footer';


export default function FourNote() {
    return (
        <div>
            <p style={{padding: "10rem" }}>Mary Mary quite contrary</p>
            <Footer />
            <Outlet />
        </div>
    );
}
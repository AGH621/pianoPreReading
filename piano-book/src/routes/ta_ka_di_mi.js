import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../components/footer';


export default function Takadimi() {
    return (
        <div>
            <p style={{padding: "10rem" }}>To come to the aid of the party</p>
            <Footer />
            <Outlet />
        </div>
    );
}
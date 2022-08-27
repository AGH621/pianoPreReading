import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../components/footer';

export default function SongList() {
    return (
        <div>
            <p style={{padding: "10rem" }}>Jack and Jill went up the hill</p>
            <Footer />
            <Outlet />
        </div>
    );
}
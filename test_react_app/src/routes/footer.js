import React from 'react';
import { Link, Outlet } from "react-router-dom";
import ReactDOM from 'react-dom';

import "../css/css_reset.css";
import "../css/text_style.css";
import "../css/nav_style.css";
import "../css/note_style.css";

export default function Footer() {
    return (
        <footer>
            <nav class="bottom">
                <p class="copyright">Copyright MMXXII &#169; Anne G. Hamill</p>
                <ul>
                    <li class="extras"><a class="pg-link" href="html/text/about.html">About</a></li>
                    <li class="extras"><a class="pg-link" href="#">Ta-ka-di-mi</a></li>
                </ul>    
            </nav>
        </footer>
    )
}
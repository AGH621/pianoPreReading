import React from 'react';
import { Link, Outlet } from "react-router-dom";
import ReactDOM from 'react-dom';


/*
class xxxFooter extends React.component {
    render() {
        <footer>
            <nav class="bottom">
                <p class="copyright">Copyright MMXXII &#169; Anne G. Hamill</p>
                <ul>
                    <li class="extras"><a class="pg-link" href="html/text/about.html">About</a></li>
                    <li class="extras"><a class="pg-link" href="#">Ta-ka-di-mi</a></li>
                </ul>    
            </nav>
        </footer>
    }
}*/


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
// src/components/Layout.js
import React from "react";
import { Link } from "gatsby";
import "../styles/global.css"; // Import your global styles
import data from "../data/data.json";
<link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
const Layout = ({ children, pageTitle, pageName }) => {
    return (
        <div className="container">
            <header>
                <nav className="pa3 pa4-ns">
                    <Link className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" to="/" title="Home">{data.home.name}</Link>
                    <div className="tc pb3">
                        <Link className="link dim gray f6 f5-ns dib mr3" to="/" title="Home">Home</Link>
                        <Link className="link dim gray f6 f5-ns dib mr3" to="/about" title="About">About</Link>
                        <Link className="link dim gray f6 f5-ns dib mr3" to="/projects" title="Projects">Projects</Link>
                        <Link className="link dim gray f6 f5-ns dib" to="/contact" title="Contact">Contact</Link>
                    </div>
                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer class="ph3 ph4-ns pv6  black-70">
                <a href="mailto:" class="link b f3 f2-ns dim black-70 ">nordev@protonmail.com</a>
                <p class="f6 db b ttu lh-solid">© {new Date().getFullYear()} Joshua Woods</p>
            </footer>


        </div>
    );
};

export default Layout;

// src/components/Layout.js
import React from "react";
import { Link } from "gatsby";
import "../styles/global.css"; // Import your global styles

const Layout = ({ children, pageTitle }) => {
  return (
    <div className="container">
      <header>
        <h1>{pageTitle}</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </header>
      
      <main>
        {children}
      </main>
      
      <footer>
        <p>&copy; {new Date().getFullYear()} My Gatsby Site. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;

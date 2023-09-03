// NavigationBar.js

import React from 'react';
import './css/NavigationBar.css'; // Import your CSS file for styling
import logo from "./images/mylogo.png"; // Import the logo image

function NavigationBar() {
  return (
    <header className="navbar">
      <div className="logo">
        {/* Use the imported logo as the src */}
        <h2>FAISAL/VOIDY</h2>
      </div>
      <div className="title">
        <h1>SOFTWARE DEVELOPER</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;

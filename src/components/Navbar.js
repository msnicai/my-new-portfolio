import React, { useState } from 'react';
import './Navbar.css';  // Import navbar styles

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);  // State to handle mobile menu toggle

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home">Matt Cristintello</a>
      </div>
      <ul className={`nav-links ${isMobile ? "mobile" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
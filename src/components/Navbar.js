import React from 'react';
import './Navbar.css';  // Add styles for the navbar here

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home">Matt Cristintello</a> {/* Updated name */}
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
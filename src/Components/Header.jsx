import React from "react";
import '../Header.css'; // Import the CSS file for styles and animations

const Header = () => {
  return (
    <div className="header">
      <a href="#home" className="nav-link">Home</a>
      <a href="#about" className="nav-link">About</a>
      <a href="#portfolio" className="nav-link">Portfolio</a>
      <a href="#footer" className="nav-link">Contact</a>
    </div>
  );
};

export default Header;

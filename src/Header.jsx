import React from 'react';
import logo from './assets/img/iimt_logo_icon.png'; 
import image from './assets/img/iim-trichy.png'; 
import './App.css'; // Import the custom CSS

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="College Logo" className="logo" />
      <img src={image} alt="Banner-Image" className="logo-image" />
    </div>
  );
};

export default Header;

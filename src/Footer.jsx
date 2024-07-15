import React from 'react';
import './assets/styles/footer.css';
import logo from './assets/img/iimt_logo_icon.png'; // Adjust the path as needed
import image from './assets/img/iim-trichy.png'; // Adjust the path as needed


import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="logo-image">
          <img src={logo} alt="Logo" className="footer-logo" />
          <img src={image} alt="Image-logo" className="footer-image" />
        </div>
        <div className="contact-section">
          <h4>Contact Us</h4>
          <p>Providing quality education and research opportunities.</p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="icon">📧</span>
              <a href="mailto:info@college.edu">info@college.edu</a>
            </div>
            <div className="contact-item">
              <span className="icon">📞</span>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
          </div>
          <div className="social-media">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <div className="quick-links">
          <h4>Quick Links</h4>
          <a href="/alumni">Alumni</a>
          <a href="/contact">Contact</a>
          <a href="/faq">FAQ</a>
          <a href="/hire-our-grads">Hire Our Grads</a>
        </div>
        <div className="about-links">
          <h4>About Us</h4>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/catalog">Catalog</a>
          <a href="/more">More</a>
        </div>
      </div><hr />
      <div className="footer-bottom">
        <p>Copyright © 2024 Indian Institute of Management Tiruchirapalli. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

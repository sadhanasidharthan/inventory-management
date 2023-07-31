import React from 'react';
import './Aboutas.css'

const AboutUs = () => {
  return (
    <div className="about">
      <header className="about-header">
        <h2 className="about-logo">ANDROID DEVELOPER</h2>
      </header>

      <nav className="about-navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>

      <div className="about-section">
        <h2>Android Corp</h2>
        <p>We are a leading company in the industry, providing innovative solutions to our clients.</p>
        <p>Founded in 2023</p>
        <p>We have 1 employee.</p>
      </div>

      <footer className="about-footer">
        <p className="about-footer-text">
          &copy; {new Date().getFullYear()} Example Corp. All rights reserved.
          | <a href="/" className="about-footer-link">Privacy Policy</a>
          | <a href="/" className="about-footer-link">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;

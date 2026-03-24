import React from 'react';
import logo from '../../Assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark e-custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} className="e-logo" alt="Finvesto" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav e-nav-links">
            <li className="nav-item"><a className="nav-link e-nav-link" href="#">API Documentation</a></li>
            <li className="nav-item"><a className="nav-link e-nav-link" href="#">Features</a></li>
            <li className="nav-item"><a className="nav-link e-nav-link" href="#">Mutual Fund App</a></li>
            <li className="nav-item"><a className="nav-link e-nav-link" href="#">About us</a></li>
            <li className="nav-item"><a className="nav-link e-nav-link" href="#">Blog</a></li>
            <li className="nav-item"><a className="nav-link e-nav-link" href="#">Contact us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
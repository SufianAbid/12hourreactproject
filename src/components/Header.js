import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="https://seeklogo.com/images/A/adidas-logo-107B082DA0-seeklogo.com.png"
            alt="Adidas Logo"
            style={{ width: '150px', height: 'auto' }} // Adjust width as needed
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/collection">Collection</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/clothing-collection">Clothing Collection</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link> {/* Added Contact Us link */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

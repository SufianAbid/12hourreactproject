import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer.css'; // Import CSS for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <Link className="footer-link" to="/">Home</Link>
          <Link className="footer-link" to="/about">About Us</Link>
          <Link className="footer-link" to="/collection">Collection</Link>
          <Link className="footer-link" to="/clothing-collection">Clothing Collection</Link>
          <Link className="footer-link" to="/faq">FAQ</Link>
          <Link className="footer-link" to="/contact">Contact Us</Link> 

        </div>
        
        <div className="footer-logo">
          <img 
            src="https://seeklogo.com/images/A/adidas-logo-107B082DA0-seeklogo.com.png" 
            alt="Adidas Logo" 
            style={{ width: '100px', height: 'auto' }} // Adjust logo size
          />
        </div>

        <p className="footer-brand-intro">
          Welcome to our store! At Adidas, we strive to bring you the best sports apparel and gear to elevate your game. Join our community and stay active!
        </p>

        <div className="footer-subscribe">
          <input 
            type="email" 
            placeholder="Subscribe now" 
            className="footer-input" 
          />
          <button className="footer-button">Subscribe</button>
        </div>

        <div className="footer-payment-icons">
          <img src="https://www.svgrepo.com/download/508716/paypal.svg" alt="PayPal" style={{ width: '50px', margin: '0 10px' }} />
          <img src="https://www.svgrepo.com/show/508402/apple-pay.svg" alt="Apple Pay" style={{ width: '50px', margin: '0 10px' }} />
          <img src="https://www.svgrepo.com/show/508404/amazon-pay.svg" alt="Amazon Pay" style={{ width: '50px', margin: '0 10px' }} />
          <img src="https://www.svgrepo.com/show/508403/amex.svg" alt="American Express" style={{ width: '50px', margin: '0 10px' }} />
          <img src="https://www.svgrepo.com/show/508406/belfius.svg" alt="Belfius" style={{ width: '50px', margin: '0 10px' }} />
        </div>

        <p className="footer-text">
          &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarHero.css';

export default function NavbarHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="navbar-container">
      <div className="overlay">
        <div className="navbar-content">
          <h1 id="megamart">MegaMart</h1>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
              <li><Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>Products</Link></li>
              <li>Contact Us</li>
            </ul>
          </div>

          <i className="fa-solid fa-cart-shopping" id="cart"></i>

          {/* Hamburger Icon toggle */}
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>

        <div className="center-content">
          <h2>Welcome to MegaMart</h2>
          <button className="cart-button">Go to Cart</button>
        </div>
      </div>
    </div>
  );
}

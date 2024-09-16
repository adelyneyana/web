import React from 'react';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <Link to="/">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;

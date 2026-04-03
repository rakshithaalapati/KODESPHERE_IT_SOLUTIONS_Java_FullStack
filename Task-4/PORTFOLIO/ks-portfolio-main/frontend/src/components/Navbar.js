import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{display: 'flex', gap: '20px', padding: '10px', borderBottom: '1px solid #ccc'}}>
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

export default Navbar;
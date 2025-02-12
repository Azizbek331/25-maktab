import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          25-Maktab
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link">Bosh Sahifa</Link>
          </li>
          <li className="nav-item">
            <Link to="/Bizhaqimizda" className="nav-link">Biz Haqimizda</Link>
          </li>
          <li className="nav-item">
            <Link to="/News" className="nav-link">Yangiliklar</Link>
          </li>
          <li className="nav-item">
            <Link to="/teachers" className="nav-link">O'qituvchilar</Link>
          </li>
               <li className="nav-item">
            <Link to="/DarsLavhalar" className="nav-link">Dars lavhalar</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Aloqa</Link>
          </li>
     
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
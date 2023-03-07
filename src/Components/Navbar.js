import React, { useState } from 'react';
import './NavStyle.css';

const toggleMenu = () => {
  document.querySelector(".line1").classList.toggle("toggleLine1");
  document.querySelector(".line2").classList.toggle("toggleLine2");
  document.querySelector(".nav-list").classList.toggle("toggleMenu");
};

const Navbar = () => {

  return (
    <nav className='nav-bar'>
      <ul className='nav-list'>
        <li className="nav-item-btn">Breakfast</li>
        <li className="nav-item-btn">Lunch</li>
        <li className="nav-item-btn">Dinner</li>
        <li className="nav-item-btn">All</li>
      </ul>

      <div className="menu-btn" onClick={toggleMenu}>
        <div className='line1'></div>
        <div className='line2'></div>
      </div>
    </nav>
  )
}

export default Navbar;

import React from 'react';

import './header.css';

export default () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo d-center">
          <span className="navbar-brand">StarDB</span>
          <i className="fas fa-star"></i>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item d-center">
            <a className="nav-link" href="#">People</a>
          </li>
          <li className="nav-item d-center">
            <a className="nav-link" href="#">Planets</a>
          </li>
          <li className="nav-item d-center">
            <a className="nav-link" href="#">Starship</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import './header.css';

const Header = () => {
  const links = [
    {label: 'People', to: '/people'},
    {label: 'Planets', to: '/planets'},
    {label: 'Starships', to: '/starships'},
  ];

  return (
    <div className="header">
      <nav className="navbar">
        <div className="logo d-center">
          <Link to="/">
            <span className="navbar-brand">StarDB</span>
            <i className="fas fa-star"></i>
          </Link>
        </div>
        <ul className="navbar-nav">

          {links.map(({label, to}) => (
            <li
              key={label} 
              className="nav-item d-center"
            >
              <NavLink 
                activeClassName="active" 
                className="nav-link" 
                to={to}
              >
                {label}
              </NavLink>
            </li>
          ))}

        </ul>
      </nav>
    </div>
  );
}

export default Header;
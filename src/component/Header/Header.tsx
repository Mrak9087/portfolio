import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from '../Container';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <Container>
        <nav className="nav">
          <NavLink to="/" className="menu-item">
            Main
          </NavLink>
          <NavLink to="/work" className="menu-item">
            Work
          </NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default Header;

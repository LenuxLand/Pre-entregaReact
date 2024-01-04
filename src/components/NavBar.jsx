import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">LenuxCrew</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Categorías</a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="container-fluid text-center bg-dark text-light pl-md-5 pr-md-5 font-weight-bold fixed-top">
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <h1 className="ml-md-5">Dikaeinstein</h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#portfolio-toggle-nav"
        aria-controls="portfolio-toggle-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="portfolio-toggle-nav">
        <ul className="nav navbar-nav mr-md-5 ml-md-auto navbar-right">
          <li className="nav-item ml-md-4">
            <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item ml-md-4">
            <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;

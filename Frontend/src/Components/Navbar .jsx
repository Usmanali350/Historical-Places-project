import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg sticky-top custom-navbar mt-2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="public/logo-2.webp" alt="" width={270} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Topattractions">
                Top Attractions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Hostels">
                Hostels
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Resturents">
                Resturents
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact Us
              </Link>
            </li>
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

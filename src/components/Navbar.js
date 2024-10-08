import React from "react";
import logo from "../images/logo.png";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className=" navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img id="logo" src={logo} alt="logo" />
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
        <div className="  collapse navbar-collapse" id="navbarNav">
          <ul className=" ms-auto navbar-nav">
            <li className=" nav-item">
              <Link className=" nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className=" nav-item">
              <Link className=" nav-link " aria-current="page" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

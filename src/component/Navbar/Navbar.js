import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              to="main"
              activeClass="active"
              offset={-110}
              spy={true}
              smooth={true}
              duration={1000}
              className="nav-links"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              offset={-110}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              className="nav-links"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="gallery"
              offset={-110}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              className="nav-links"
            >
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="footer"
              offset={-110}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              className="nav-links"
            >
              Access
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

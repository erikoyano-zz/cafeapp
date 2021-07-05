import React from "react";
import "./Footer.css";
import {
  GrInstagram,
  GrYoutube,
  GrFacebook,
  GrTwitter,
  GrLinkedin,
} from "react-icons/gr";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>LS CAFE</h2>
            <h3>Address</h3>
            <p>adfasdfadfasd</p>
            <h3>Hours:</h3>
            <p>Mon-Fri 9:00 ~ 20:00</p>
            <h3>Contact:</h3>
            <p>080-1234-1234</p>
          </div>

          <div className="footer-link-items">
            <h2>Follow</h2>
            <a href="/">Instagram</a>
            <a href="/">Facebook</a>
            <a href="/">Youtube</a>
            <a href="/">Twitter</a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <a href="/" className="social-logo">
              {/* <img src={logo} alt="logoimage" /> */}
            </a>
          </div>
          <small className="website-rights">LS Cafe© 2021</small>
          <div className="social-icons">
            <a href="/" className="social-icon-link facebook">
              <GrFacebook />
            </a>
            <a href="/" className="social-icon-link instagram">
              <GrInstagram />
            </a>
            <a href="/" className="social-icon-link youtube">
              <GrYoutube />
            </a>
            <a href="/" className="social-icon-link twitter">
              <GrTwitter />
            </a>
            <a href="/" className="social-icon-link twitter">
              <GrLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

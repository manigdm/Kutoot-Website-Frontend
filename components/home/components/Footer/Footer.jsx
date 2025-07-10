import React from "react";
import "./Footer.scss";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        <div className="footer-column logo-section">
          <img
            src="/images/landingpage/kutoot-logo.png"
            alt="Kutoot Logo"
            className="footer-logo"
          />
        </div>

        <div className="footer-column links-section">
          <h3>Kutoot</h3>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/faqs">FAQs</a>
            </li>
            <li>
              <a href="/charity-partners">Our Charity Partners</a>
            </li>
            <li>
              <a href="/partners">Our Partners</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
          </ul>
        </div>

        <div className="footer-column links-section">
          <h3>Legal & Policies</h3>
          <ul>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="/refund-policy">Return & Refund</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy</a>
            </li>
          </ul>
        </div>

        <div className="footer-column connect-section">
          <h3>Connect</h3>
          <p>Contact us</p>
          <a href="mailto:info@xyz.com" className="email-link">
            info@xyz.com
          </a>
          <div className="social-icons">
            <a href="#">
              <FaWhatsapp />
            </a>
            {/* <a href="#">
              <FaXTwitter />
            </a> */}
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>Copyright © 2025. All Rights Reserved by Kutoot</p>
      </div>
    </footer>
  );
};

export default Footer;

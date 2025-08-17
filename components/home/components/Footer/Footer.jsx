import React from "react";
import "./Footer.scss";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
          <div className="d-flex gap-3">
            <div className="d-flex align-items-center gap-2 apple-store">
              <img src="/apple-icon.png" width={32} height={32} />
              <div className="d-flex flex-column gap-1">
                <p className="text-white">Download on the</p>
                <p className="text-white">App Store</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2 play-store">
              <img src="/Playstore.png" width={32} height={32} />
              <div className="d-flex flex-column gap-1">
                <p className="text-white">Android app on</p>
                <p className="text-white">Google Play</p>
              </div>
            </div>
          </div>
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
              <a href="/termsandcondition">Terms & Conditions</a>
            </li>
            <li>
              <a href="/returnrefund">Return & Refund</a>
            </li>
            <li>
              <a href="/privacypolicy">Privacy</a>
            </li>
          </ul>
        </div>

        <div className="footer-column connect-section">
          <h3>Connect</h3>
       <p className="!text-gray-400">Contact us</p>

          <a href="mailto:support@kutoot.com" className="email-link">
            support@kutoot.com
          </a>
          <div className="social-icons">
            <a href="#">
              <FaWhatsapp />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
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
        <p className="footer-bottom">Copyright © 2025. All Rights Reserved by Kutoot</p>
      </div>
    </footer>
  );
};

export default Footer;

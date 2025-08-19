"use client";
import React, { useState } from "react";
import "./Footer.scss";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // auto close after 2 sec
  };

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
            <div
              className="d-flex align-items-center gap-2 apple-store"
              onClick={handleDownloadClick}
              style={{ cursor: "pointer" }}
            >
              <img src="/apple-icon.png" width={32} height={32} />
              <div className="d-flex flex-column gap-1">
                <p className="text-white">Download on the</p>
                <p className="text-white">App Store</p>
              </div>
            </div>
            <div
              className="d-flex align-items-center gap-2 play-store"
              onClick={handleDownloadClick}
              style={{ cursor: "pointer" }}
            >
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
        <p className="footer-bottom">
          Copyright © 2025. All Rights Reserved by Kutoot
        </p>
      </div>

      {/* Inline Popup */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px 40px",
              borderRadius: "10px",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: "600",
              color: "#333",
            }}
          >
            🚀 Launching Soon!
            <div>
              <button
                onClick={() => setShowPopup(false)}
                style={{
                  marginTop: "15px",
                  padding: "8px 16px",
                  background: "#ff6600",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

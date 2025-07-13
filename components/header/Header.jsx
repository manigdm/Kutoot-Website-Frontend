import React from "react";
import "./Header.scss";
import { FaShareAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import { useState } from "react";

export function LogoReveal() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`logo-reveal-container ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="/images/landingpage/header-frame.png"
        alt="K Logo"
        className="logo-symbol"
      />

      <motion.img
        src="/images/landingpage/kutoot-logo.png"
        alt="Kutoot"
        initial={{ opacity: 0, width: 0 }}
        animate={
          isHovered ? { opacity: 1, width: "auto" } : { opacity: 0, width: 0 }
        }
        transition={{ duration: 0.4 }}
        className="logo-text"
      />
    </div>
  );
}

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__left">
          <div className="header__progress-container">
            <p className="header__label">Lucky Draw Countdown</p>
            <div className="header__progress">
              <span className="header__percentage">65%</span>
              <div className="header__bar">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className={`bar-segment ${i < 6 ? "filled" : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <button className="header__button orange">Enter Now</button>
        </div>

        <div className="header__center">
          <img
            src="/images/landingpage/kutoot-logo.png"
            alt="Kutoot Logo"
            className="header__logo"
          />
        </div>

        <div className="header__right">
          <nav className="header__nav">
            <a href="#">Blog</a>
            <a href="#">Campaigns</a>
            <a href="#">Winners</a>
          </nav>
          <button className="header__button orange">Shop Now</button>
          <button className="header__button outline">Log in</button>
          <div className="header__icon">
            <FaShareAlt />
          </div>
        </div>
      </header>
      {/* <LogoReveal /> */}
    </>
  );
};

export default Header;

import React from "react";
import "./Header.scss";
import { FaShareAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__progress-container">
          <p className="header__label">Lucky Draw Countdown</p>
          <div className="header__progress">
            <span className="header__percentage">65%</span>
            <div className="header__bar">
              {[...Array(10)].map((_, i) => (
                <div key={i} className={`bar-segment ${i < 6 ? "filled" : ""}`} />
              ))}
            </div>
          </div>
        </div>
        <button className="header__button orange">Enter Now</button>
      </div>

      <div className="header__center">
        <img src="/images/landingpage/kutoot-logo.png" alt="Kutoot Logo" className="header__logo" />
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
  );
};

export default Header;
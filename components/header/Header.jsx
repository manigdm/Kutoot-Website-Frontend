import React, { useEffect } from "react";
import "./Header.scss";
import { FaShareAlt } from "react-icons/fa";
import { useState } from "react";
import CommonButton from "@/components/common/CommonButton";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsHovered(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`header ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="header__center-logo" />
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
          <button className="kutoot--header__button">
            <FaArrowRight className="kutoot--header__button-icon" />
            Enter Now
          </button>
        </div>

        <div className="header__right">
          <nav className="header__nav">
            <a href="#">Campaigns</a>
            <a href="#">Winners</a>
            <a href="#">My Coupons</a>
          </nav>
          <button className="kutoot--header__button">
            <FaArrowRight className="kutoot--header__button-icon" />
            Shop Now
          </button>
          <button className="header__button outline">Log in</button>
          <div className="header__icon">
            <FaShareAlt />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

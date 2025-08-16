import React, { useEffect } from "react";
import "./Header.scss";
import { FaShareAlt } from "react-icons/fa";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser?.user);
    }
  }, []);

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
          {user ? (
            // If logged in, show profile image
            <div style={{marginLeft: '1rem'}}>
              <img
                src={user?.image || "/images/campaign/profile-after-login.svg"} // adjust key if different
                alt="Profile"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",

                }}
                onClick={() => router.push("/user")} // optional: go to profile page
              />
            </div>
          ) : (
            // If not logged in, show login button
            <button
              className="header__button outline"
              onClick={() => router.push("/login")}
            >
              Log in
            </button>
          )}
          <div className="header__icon">
            <FaShareAlt />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

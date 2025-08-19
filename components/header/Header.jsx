"use client";
import React, { useEffect, useState } from "react";
import "./Header.scss";
import { FaShareAlt, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [user, setUser] = useState(null);
  const [copied, setCopied] = useState(false); // popup state
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
      setIsHovered(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 📌 Copy link + show popup
  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://kutoot.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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

          <a href="/campaign" className="kutoot--header__button">
            <FaArrowRight className="kutoot--header__button-icon" />
            Enter Now
          </a>
        </div>

        <div className="header__right">
          <nav className="header__nav">
            <a href="/campaign">Campaigns</a>
          </nav>




          <a
            href="https://kutoot-frontend-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="kutoot--header__button">
              <FaArrowRight className="kutoot--header__button-icon" />
              Shop Now
            </button>
          </a>

          {user ? (
            <div style={{ marginLeft: "1rem" }}>
              <img
                src={user?.image || "/images/campaign/profile-after-login.svg"}
                alt="Profile"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={() => router.push("/user")}
              />
            </div>
          ) : (
            <button
              className="header__button outline"
              onClick={() => router.push("/login")}
            >
              Log in
            </button>
          )}

          {/* 📌 Share Icon */}
          <div className="header__icon">
            <FaShareAlt onClick={handleCopyLink} style={{ cursor: "pointer" }} />
          </div>
        </div>
      </header>

      {/* 📌 Popup (toast style) */}
      {copied && (
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "80%",
            transform: "translate(-50%, -50%)",
            background: "#333",
            color: "white",
            padding: "15px 25px",
            borderRadius: "10px",
            fontSize: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            zIndex: 1000,
            animation: "fadeInOut 2.5s ease",
          }}
        >
          ✅ Link copied: kutoot.com
        </div>
      )}

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translate(-50%, 20px);
          }
          10% {
            opacity: 1;
            transform: translate(-50%, 0);
          }
          90% {
            opacity: 1;
            transform: translate(-50%, 0);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, 20px);
          }
        }
      `}</style>
    </>
  );
};

export default Header;

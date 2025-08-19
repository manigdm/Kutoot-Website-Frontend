import React from "react";
import "./LockButton.scss";
import { IoLockClosedOutline } from "react-icons/io5";

const LockButton = ({ label = "Draw Date", tooltipText = "", onClick, banner }) => {
  const bannerData = banner || {};
  console.log("banner data", bannerData)
  return (
    <div className="lock-button-wrapper">
      {tooltipText && <div className="tooltip">{tooltipText}</div>}
      <button className="lock-button" onClick={onClick}>
        <span className="lock-icon">
          <IoLockClosedOutline className="text-black mb-1"/>
        </span>
        {label}
      </button>
    </div>
  );
};

export default LockButton;

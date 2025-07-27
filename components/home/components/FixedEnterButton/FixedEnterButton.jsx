import React from "react";
import "./FixedEnterButton.scss";
import { FiLogIn } from "react-icons/fi";
import { BsQuestionLg } from "react-icons/bs";

const FixedEnterButton = () => {
  return (
    <>
      <button className="fixed-enter-button" aria-label="Enter Now">
        <FiLogIn className="enter-icon" />
        <span className="enter-text">Enter Now</span>
      </button>
      <div className="question-mark">
        <BsQuestionLg />
      </div>
    </>
  );
};

export default FixedEnterButton;

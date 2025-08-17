import React from "react";
import "./FixedEnterButton.scss";
import { FiLogIn } from "react-icons/fi";
import { BsQuestionLg } from "react-icons/bs";

const FixedEnterButton = () => {
  return (
    <>
    



              <a href="/campaign">
        <button className="fixed-enter-button" aria-label="Enter Now">
        <FiLogIn className="enter-icon" />
        <span className="enter-text">Enter Now</span>
      </button>
      </a>
   <div
  className="question-mark"
  onClick={() => {
    const section = document.getElementById("how-kutoot-works");
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  }}
  style={{ cursor: "pointer" }}
>
  <BsQuestionLg />
</div>
    </>
  );
};

export default FixedEnterButton;

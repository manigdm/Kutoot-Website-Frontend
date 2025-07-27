import React from 'react';
import './CommonButton.scss';
import { FaArrowRight } from "react-icons/fa";

const CommonButton = ({ label = 'Enter Now', onClick }) => {
  return (
    <button className="common-button" onClick={onClick}>
      <span className="hover-arrow"><FaArrowRight /></span>
      <span className="label">{label}</span>
    </button>
  );
};

export default CommonButton;
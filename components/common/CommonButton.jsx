import React from 'react';
import './CommonButton.scss';

const CommonButton = ({ label = 'Enter Now', onClick }) => {
  return (
    <button className="common-button" onClick={onClick}>
      <span className="hover-arrow">→</span>
      <span className="label">{label}</span>
      <span className="dot">·</span>
    </button>
  );
};

export default CommonButton;
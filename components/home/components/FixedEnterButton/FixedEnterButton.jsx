import React from 'react';
import './FixedEnterButton.scss';

// Using an icon from the 'react-icons/fi' (Feather Icons) library
import { FiLogIn } from 'react-icons/fi';

const FixedEnterButton = () => {
  return (
    <button className="fixed-enter-button" aria-label="Enter Now">
      <FiLogIn className="enter-icon" />
      <span className="enter-text">Enter Now</span>
    </button>
  );
};

export default FixedEnterButton;
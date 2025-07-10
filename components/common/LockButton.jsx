import React from 'react';
import './LockButton.scss';

const LockButton = ({ label = 'Draw Date', tooltipText = '', onClick }) => {
  return (
    <div className="lock-button-wrapper">
      {tooltipText && <div className="tooltip">{tooltipText}</div>}
      <button className="lock-button" onClick={onClick}>
        <span className="lock-icon">🔒</span>
        {label}
      </button>
    </div>
  );
};

export default LockButton;
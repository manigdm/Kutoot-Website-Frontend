import React from "react";

const CommonTitle = ({ title, titleClass = '' }) => {
  return (
    <div className="d-flex align-items-center justify-content-center mt-40 gap-3">
      <img src="/images/landingpage/title-coins-left.png" />
      <h2 className={`title-text ${titleClass}`}>{title}</h2>
      <img src="/images/landingpage/title-coins-right.png" />
    </div>
  );
};

export default CommonTitle;

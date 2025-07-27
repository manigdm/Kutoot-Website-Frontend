import React from "react";

const CommonTitle = ({ title, titleClass = "" }) => {
  return (
    <div className="d-flex align-items-center justify-content-center mt-40 gap-3">
      <h2 className={`title-text ${titleClass}`}>{title}</h2>
    </div>
  );
};

export default CommonTitle;

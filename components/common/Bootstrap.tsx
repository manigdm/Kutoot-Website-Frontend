"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";

const Bootstrap = ({ children }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default Bootstrap;

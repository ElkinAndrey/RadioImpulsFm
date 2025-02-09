import React from "react";
import classes from "./EmptyError.module.css";

const EmptyError = ({ color = "#000000", children }) => {
  return (
    <span className={classes.root} style={{ color: color }}>
      {children}
    </span>
  );
};

export default EmptyError;

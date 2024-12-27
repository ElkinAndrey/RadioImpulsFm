import React from "react";
import classes from "./EmptyError.module.css";

const EmptyError = ({ children }) => {
  return <span className={classes.root}>{children}</span>;
};

export default EmptyError;

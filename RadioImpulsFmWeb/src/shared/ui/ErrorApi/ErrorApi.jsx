import React from "react";
import classes from "./ErrorApi.module.css";

const ErrorApi = ({ children }) => {
  return <span className={classes.root}>{children}</span>;
};

export default ErrorApi;

import React from "react";
import classes from "./Header.module.css";

const Header = ({ title = "", startAdornment = null, endAdornment = null, children = null }) => {
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <div className={classes.startAdornment}>{startAdornment}</div>
        <span className={classes.title}>{title}</span>
        <div>{endAdornment}</div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Header;

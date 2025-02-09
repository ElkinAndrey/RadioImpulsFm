import React from "react";
import classes from "./RadioWithLink.module.css";

const RadioWithLink = ({ radio = null, children = null }) => {
  return (
    <li className={classes.root}>
      <div className={classes.info}>
        <span className={classes.name}>{radio?.name ?? ""}</span>
        <span className={classes.link}>{radio?.link ?? ""}</span>
      </div>
      <div>{children}</div>
    </li>
  );
};

export default RadioWithLink;

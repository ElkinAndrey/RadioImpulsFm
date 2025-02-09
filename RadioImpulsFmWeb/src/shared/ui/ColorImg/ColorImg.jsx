import React from "react";
import classes from "./ColorImg.module.css";

const ColorImg = ({ src = "", color = "#000000", transition = null }) => {
  const style = {
    backgroundColor: color ?? "#000000",
    maskImage: `url(${src ?? ""})`,
    ...(transition ? { transition: `background-color ${transition}` } : {}),
  };

  return <div className={classes.root} style={style}></div>;
};

export default ColorImg;

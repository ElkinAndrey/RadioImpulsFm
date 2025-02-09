import React from "react";
import classes from "./ChangeButton.module.css";

const ChangeButton = ({ src = "", alt = "", onClick = () => {}, width = "34px" }) => {
  return (
    <button
      className={classes.root}
      onClick={onClick}
      style={{ height: width, width: width }}
      title={alt}
    >
      <img alt={alt} src={src} className={classes.image} />
    </button>
  );
};

export default ChangeButton;

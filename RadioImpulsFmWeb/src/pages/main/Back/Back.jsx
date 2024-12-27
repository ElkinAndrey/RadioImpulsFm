import React from "react";
import BackIcon from "@/assets/images/back.svg";
import classes from "./Back.module.css";

const Back = ({ onClick = () => {} }) => {
  return (
    <button className={classes.root} onClick={onClick}>
      <img src={BackIcon} alt="Назад" className={classes.image} />
    </button>
  );
};

export default Back;

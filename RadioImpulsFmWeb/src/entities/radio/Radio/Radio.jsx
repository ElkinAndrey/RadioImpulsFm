import React from "react";
import classes from "./Radio.module.css";

const Radio = ({ name, hasBorder = false, onClick = () => {} }) => {
  return (
    <li>
      <button className={hasBorder ? classes.buttonBorder : classes.button} onClick={onClick}>
        {name}
      </button>
    </li>
  );
};

export default Radio;

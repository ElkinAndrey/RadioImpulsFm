import React from "react";
import classes from "./Category.module.css";

const Category = ({ name, onClick = () => {} }) => {
  return (
    <li className={classes.root}>
      <button className={classes.button} onClick={onClick}>
        {name}
      </button>
    </li>
  );
};

export default Category;

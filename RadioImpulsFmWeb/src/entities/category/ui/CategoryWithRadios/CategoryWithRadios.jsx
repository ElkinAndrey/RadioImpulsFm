import React from "react";
import classes from "./CategoryWithRadios.module.css";

const CategoryWithRadios = ({ name = "", children = null, adornment = null, count = null }) => {
  return (
    <li className={classes.root}>
      <div className={classes.header}>
        <h2 className={classes.title}>
          {name ?? ""}
          <span className={classes.count}>{count && `Содержит ${count} радио`}</span>
        </h2>
        {adornment}
      </div>
      <div>{children}</div>
    </li>
  );
};

export default CategoryWithRadios;

import React from "react";
import LogoIcon from "@/assets/images/logo.png";
import classes from "./Logo.module.css";

const Logo = () => {
  return <img className={classes.root} alt="Логотип" src={LogoIcon} />;
};

export default Logo;

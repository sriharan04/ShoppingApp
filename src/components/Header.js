import React from "react";
import classes from "./Header.module.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className={classes.main_header}>
      <img src={logo} alt="logo"></img>
      <h1>Shoppify</h1>
    </div>
  );
};

export default Header;

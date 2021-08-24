import React, { Fragment } from "react";

import marvelPoster from "../../assets/marvel-poster.jpg";
import marvelLogo from "../../assets/Marvel_Logo.png";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img
          className={classes.marvellogo}
          alt="marvel_logo"
          src={marvelLogo}
        />
        <HeaderCartButton onClick={props.modalOpen} />
      </header>
      <div className={classes["main-image"]}>
        <img src={marvelPoster} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;

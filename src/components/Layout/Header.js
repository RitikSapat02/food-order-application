import React from "react";
import mealsImag from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>

      <div>
        <img
          src={mealsImag}
          className={classes["main-image"]}
          alt="A table full of delicious food"
        />
      </div>
    </React.Fragment>
  );
};

export default Header;

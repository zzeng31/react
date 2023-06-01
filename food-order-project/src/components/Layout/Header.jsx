import React from "react";
import styles from "./Header.module.css";
import mealsImage from "../../asset/meals.jpg";
import HedaerCartButton from "./HedaerCartButton";
const Header = ({ onShowCart }) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HedaerCartButton onClick={onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table of food" />
      </div>
    </React.Fragment>
  );
};

export default Header;

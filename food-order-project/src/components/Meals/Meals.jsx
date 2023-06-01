import React, { Fragment } from "react";
import styles from "./Meals.module.css";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;

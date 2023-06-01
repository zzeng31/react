import React from "react";
import styles from "./AvailableMeals.module.css";
import { DUMMY_MEALS } from "./dummy-meals";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      id={meal.id}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import CartContext from "../../../store/cartContext";
import MealItemForm from "./MealItemForm";
const MealItem = ({ name, description, price, id }) => {
  const { addItem } = useContext(CartContext);
  const addToCartHandler = (amount) => {
    addItem({
      id: id,
      name: name,
      description: description,
      price: price,
      amount: amount,
    });
  };
  return (
    <div className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{`$${price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm id={id} addToCartHandler={addToCartHandler} />
      </div>
    </div>
  );
};

export default MealItem;

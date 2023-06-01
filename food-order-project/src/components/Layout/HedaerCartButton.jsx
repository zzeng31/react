import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cartContext";
import styles from "./HedaerCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
const HedaerCartButton = ({ onClick }) => {
  const { items } = useContext(CartContext);
  const [bumpButton, setBumpButton] = useState(false);
  useEffect(() => {
    if (items.length === 0) return;
    setBumpButton(true);
    const timerId = setTimeout(() => {
      setBumpButton(false);
    }, 300);
    return () => {
      clearTimeout(timerId);
    };
  }, [items]);

  return (
    <button
      className={`${styles.button} ${bumpButton ? styles.bump : ""}`}
      onClick={onClick}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>
        {items.reduce((acc, curItem) => acc + curItem.amount, 0)}
      </span>
    </button>
  );
};

export default HedaerCartButton;

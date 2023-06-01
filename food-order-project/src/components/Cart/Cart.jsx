import React, { useContext } from "react";
import CartContext from "../../store/cartContext";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
const Cart = ({ onHideCart }) => {
  const { items, removeItem, addItem } = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    addItem({
      ...item,
      amount: 1,
    });
  };
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>
          $
          {items
            .reduce((acc, curItem) => acc + curItem.amount * curItem.price, 0)
            .toFixed(2)}
        </span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button-alt"]} onClick={onHideCart}>
          Close
        </button>
        {items.length > 0 && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

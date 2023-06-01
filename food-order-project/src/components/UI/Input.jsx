import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef(({ id, input, label }, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...input} ref={ref} />
    </div>
  );
});

export default Input;

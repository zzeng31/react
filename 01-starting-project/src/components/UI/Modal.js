import React from "react";
import classes from "./Modal.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
const Modal = ({ title, message, onClose }) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={onClose}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
          <footer className={classes.actions}>
            <Button onClick={onClose}>Close</Button>
          </footer>
        </div>
      </Card>
    </div>
  );
};

export default Modal;

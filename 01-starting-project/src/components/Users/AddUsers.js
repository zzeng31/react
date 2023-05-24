import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUsers.module.css";
import Modal from "../UI/Modal";
const AddUsers = ({ addToUserList }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const handleUsername = (e) => {
    setEnteredUsername(e.target.value);
  };
  const handleAge = (e) => {
    setEnteredAge(e.target.value);
  };
  const onClose = () => {
    setMessage(null);
    setError(false);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredAge.trim().length === 0) {
      setMessage({
        title: "Age can not be empty.",
        message: "Please enter a valid age",
      });
      setError(true);
      return;
    }

    if (enteredUsername.trim().length === 0) {
      setMessage({
        title: "User name can not be empty.",
        message: "Please enter a valid name",
      });
      setError(true);
      return;
    }
    if (+enteredAge < 1) {
      setMessage({
        title: "Age can not be less than 1.",
        message: "Please enter a valid age",
      });
      setError(true);
      return;
    }
    addToUserList({
      id: Math.random(),
      name: enteredUsername,
      age: enteredAge,
    });
    setEnteredAge("");
    setEnteredUsername("");
  };
  return (
    <div>
      {error && (
        <Modal
          title={message.title}
          message={message.message}
          onClose={onClose}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler} className={classes.input}>
          <label className={classes.label} htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={handleUsername}
          ></input>
          <label className={classes.label} htmlFor="age">
            Age
          </label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={handleAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUsers;

import React from "react";
import Card from "./UI/Card";
import "./AddUsers.css";
const AddUsers = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={addUserHandler} className="input">
        <label className="label" htmlFor="username">
          Username
        </label>
        <input id="username" type="text"></input>
        <label className="label" htmlFor="age">
          Age
        </label>
        <input id="age" type="number"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};
export default AddUsers;

import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UserList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p> User: {user.name}</p>

            <p> Age: {user.age}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;

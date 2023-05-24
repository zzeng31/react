import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";
// import { Rating } from "pat-ui";
// import Card from "./components/UI/Card";
// import "pat-ui/index.css";
function App() {
  const [users, setUsers] = useState([]);
  const addToUserList = (newUser) => {
    setUsers((prevState) => [...prevState, newUser]);
  };
  return (
    <div>
      <AddUsers addToUserList={addToUserList} />
      {users.length > 0 && <UserList users={users} />}
    </div>
  );
}

export default App;

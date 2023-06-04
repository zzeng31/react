import React from "react";
const UsersContext = React.createContext({
  users: [],
});
const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];
const UserContextProvider = (props) => {
  return (
    <UsersContext.Provider
      value={{
        users: DUMMY_USERS,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};
export { UsersContext, UserContextProvider };

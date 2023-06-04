import Users from "./components/Users";
import UserFinder from "./components/UserFinder";
import { UsersContext, UserContextProvider } from "./store/users-context";

function App() {
  return (
    <UserContextProvider>
      <UserFinder />
      {/* <Users /> */}
    </UserContextProvider>
  );
}

export default App;

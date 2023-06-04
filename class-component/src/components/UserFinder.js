import { Fragment, useState, useEffect, Component } from "react";

import Users from "./Users";
import classes from "./UseerFinder.module.css";
import { UsersContext } from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";
class UserFinder extends Component {
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }
  componentDidMount() {
    // fetch data
    this.setState({ filteredUsers: this.context.users });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState((curState) => {
        return {
          ...curState,
          filteredUsers: this.context.users.filter((user) =>
            user.name.includes(this.state.searchTerm)
          ),
        };
      });
    }
  }
  searchChangeHandler(event) {
    this.setState((curState) => {
      return {
        ...curState,
        searchTerm: event.target.value,
      };
    });
  }
  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}
// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     console.log(searchTerm);
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//     console.log(filteredUsers);
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;

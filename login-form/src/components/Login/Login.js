import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";
import { AuthContext } from "../../context/AuthContext";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
const inputReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_INPUT":
      return {
        ...state,
        email: action.payload,
        isEmailValid: action.payload.includes("@"),
      };
    case "EMAIL_INPUT_BLUR":
      return {
        ...state,
        value: state.value,
        isValid: state.email.includes("@"),
      };
    case "PASSWORD_INPUT":
      return {
        ...state,
        password: action.payload,
        isPasswordValid: action.payload.trim().length > 6,
      };
    case "PASSWORD_INPUT_BUR":
      return {
        ...state,
        value: state.value,
        isValid: state.password.trim().length > 6,
      };
    default:
      return state;
  }
};
const Login = (props) => {
  const [inputState, dispatchInput] = useReducer(inputReducer, {
    email: "",
    password: "",
    isEmailValid: true,
    isPasswordValid: true,
  });

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const { onLogin } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  useEffect(() => {
    //Debuncing
    const timerId = setTimeout(() => {
      console.log("Checking form validity");
      setFormIsValid(inputState.isEmailValid && inputState.isPasswordValid);
    }, 500);
    return () => {
      // cleanup the timer
      console.log("Clean up");
      clearTimeout(timerId);
    };
  }, [inputState.isEmailValid, inputState.isPasswordValid]); //only re-run only-if these states are changed
  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchInput({
      type: "EMAIL_INPUT",
      payload: event.target.value,
    });
  };

  const passwordChangeHandler = (event) => {
    dispatchInput({
      type: "PASSWORD_INPUT",
      payload: event.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchInput({
      type: "EMAIL_INPUT_BLUR",
    });
  };

  const validatePasswordHandler = () => {
    dispatchInput({
      type: "PASSWORD_INPUT_BLUR",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      onLogin(inputState.email, inputState.password);
    } else if (!inputState.isEmailValid) {
      emailRef.current.focus();
    } else {
      passwordRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          isValid={inputState.isEmailValid}
          value={inputState.email}
          type="email"
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          ref={emailRef}
        />
        {/* <div
          className={`${classes.control} ${
            inputState.isEmailValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={inputState.email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div> */}
        <Input
          id="password"
          label="Password"
          isValid={inputState.isPasswordValid}
          value={inputState.password}
          type="password"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          ref={passwordRef}
        />
        {/* <div
          className={`${classes.control} ${
            inputState.isPasswordValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={inputState.password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */}
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

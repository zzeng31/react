import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef(
  // forwardRef can accepts the ref passed from parent component.
  ({ isValid, label, id, type, value, onChange, onBlur }, ref) => {
    const inputRef = useRef();

    const activate = () => {
      inputRef.current.focus();
    };
    useImperativeHandle(ref, () => {
      // useImperativeHandle gives you a way to access this activate function using ref outside
      return {
        focus: activate,
      };
    });
    return (
      <div
        className={`${classes.control} ${
          isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required
        />
      </div>
    );
  }
);

export default Input;

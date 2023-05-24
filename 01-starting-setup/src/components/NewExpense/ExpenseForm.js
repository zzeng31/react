import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [input, setInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm((prevState) => !prevState);
  };
  const inputChangeHandler = (event) => {
    // setInput({
    //   ...input,
    //   [event.target.name]: event.target.value,
    // });
    setInput((prevState) => {
      return event.target.name === "date"
        ? { ...prevState, [event.target.name]: new Date(event.target.value) }
        : { ...prevState, [event.target.name]: event.target.value };
    });
  };
  const submitHandler = (event) => {
    console.log(input);
    event.preventDefault();
    // Clear the form
    props.setExpenses((prevState) => {
      const newExpenses = [
        ...prevState,
        {
          id: `e${prevState.length + 1}`,
          ...input,
        },
      ];
      props.setDefaultExpenses(newExpenses);
      return newExpenses;
    });

    setInput({
      title: "",
      amount: "",
      date: "",
    });
  };
  return showForm ? (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={input.title}
            name="title"
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            value={input.amount}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={inputChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={handleShowForm}>Cancel</button>
      </div>
    </form>
  ) : (
    <button onClick={handleShowForm}>Add New Expense</button>
  );
};
export default ExpenseForm;

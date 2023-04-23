import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm
        setExpenses={props.setExpenses}
        setDefaultExpenses={props.setDefaultExpenses}
      />
    </div>
  );
};
export default NewExpense;

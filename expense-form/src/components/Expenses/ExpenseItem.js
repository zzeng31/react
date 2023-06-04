import "../Expenses/ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  const expenseTitle = props.expense.title;
  const expenseAmount = props.expense.amount;

  return (
    <div className="expense-item">
      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2 className="expense-item__title">{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;

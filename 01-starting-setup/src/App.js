import ExpenseItems from "./components/Expenses/ExpenseItems";
import Card from "./components/UI/Card";
import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
function App() {
  let expensesDefault = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(expensesDefault);
  const [defaultExpenses, setDefaultExpenses] = useState(expensesDefault);
  return (
    <div className="container">
      <Card>
        <NewExpense
          setExpenses={setExpenses}
          setDefaultExpenses={setDefaultExpenses}
        />
        <ExpensesFilter
          expenses={expenses}
          setExpenses={setExpenses}
          defaultExpenses={defaultExpenses}
        />
        <ExpenseItems expenses={expenses} />
      </Card>
    </div>
  );
}

export default App;

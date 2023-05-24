import ExpenseItem from "../Expenses/ExpenseItem";
const ExpenseItems = (props) => {
  return props.expenses.length > 0 ? (
    props.expenses.map((expense) => {
      return <ExpenseItem expense={expense} key={expense.id} />;
    })
  ) : (
    <h2 style={{ textAlign: "center" }}>No expenses found</h2>
  );
};
export default ExpenseItems;

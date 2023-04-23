import ExpenseItem from "../Expenses/ExpenseItem";
const ExpenseItems = (props) => {
  return props.expenses.length > 0 ? (
    props.expenses.map((expense, index) => {
      return <ExpenseItem expense={expense} key={index} />;
    })
  ) : (
    <h2 style={{ textAlign: "center" }}>No expenses found</h2>
  );
};
export default ExpenseItems;

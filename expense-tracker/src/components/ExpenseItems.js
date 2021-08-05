import ExpenseItem from "./ExpenseItem";
import "./ExpenseItems.css";

function ExpenseItems(props) {
  const expenseItems = props.expenses.map((expense) => (
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
  return <div className="expense-items"> {expenseItems}</div>;
}

export default ExpenseItems;

import ExpenseItem from "./ExpenseItem";
import Card from "../common/Card";
import "./ExpenseItems.css";

function ExpenseItems(props) {
  const expenseItems = props.expenses.map((expense) => (
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
  return <Card className="expense-items"> {expenseItems}</Card>;
}

export default ExpenseItems;

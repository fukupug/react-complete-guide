import { useState } from "react";

import ExpensesFillter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../common/Card";
import "./ExpenseItems.css";

const ExpenseItems = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expenseItems = props.expenses.map((expense) => (
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  return (
    <div>
      <Card className="expense-items">
        <ExpensesFillter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseItems}
      </Card>
    </div>
  );
};

export default ExpenseItems;

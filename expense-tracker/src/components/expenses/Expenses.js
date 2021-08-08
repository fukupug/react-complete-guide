import { useState } from "react";

import ExpensesFillter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../common/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses
    .filter((e) => filteredYear === String(e.date.getFullYear()))
    .map((expense) => (
      <ExpenseItem
        key={expense.id}
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
        {filteredExpenses}
      </Card>
    </div>
  );
};

export default Expenses;

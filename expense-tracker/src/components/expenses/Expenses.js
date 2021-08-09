import { useState } from "react";

import ExpensesFillter from "./ExpensesFilter";
import Card from "../common/Card";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => filteredYear === String(expense.date.getFullYear())
  );

  return (
    <div>
      <Card className="expense-items">
        <ExpensesFillter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;

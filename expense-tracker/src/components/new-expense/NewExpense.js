import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showFormFlag, setShowFormFlag] = useState(false);

  const showForm = () => {
    setShowFormFlag(true);
  };

  const hideForm = () => {
    setShowFormFlag(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expense);
    hideForm();
  };

  const newExpenseContent = showFormFlag ? (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onClickCancel={hideForm}
    />
  ) : (
    <button onClick={showForm}>Add New Expense</button>
  );

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;

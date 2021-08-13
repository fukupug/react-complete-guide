import { useState } from "react";

import Card from "../common/Card";
import ErrorModal from "../common/ErrorModal";
import Button from "../common/Button";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid  age (> 0)",
      });
      return;
    }

    const userData = {
      id: Math.random().toString(),
      name: enteredName,
      age: +enteredAge,
    };
    props.onAddUser(userData);
    setEnteredName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />
      )}
      <Card className={styles["form-control"]}>
        <form onSubmit={submitHandler}>
          <label>UserName</label>
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          ></input>
          <label>Age (Years)</label>
          <input
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <div className={styles["button-area"]}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;

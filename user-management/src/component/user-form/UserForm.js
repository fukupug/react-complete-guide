import { useState, useRef } from "react";

import Card from "../common/Card";
import ErrorModal from "../common/ErrorModal";
import Button from "../common/Button";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
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
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles["form-control"]}>
        <form onSubmit={submitHandler}>
          <label>UserName</label>
          <input
            type="text"
            ref={nameInputRef}
          />
          <label>Age (Years)</label>
          <input
            type="number"
            ref={ageInputRef}
          />
          <div className={styles["button-area"]}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default UserForm;

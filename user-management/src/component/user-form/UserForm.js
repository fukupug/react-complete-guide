import { useState } from "react";

import Card from "../common/Card";
import Button from "../common/Button";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      id: Math.random().toString(),
      name: enteredName,
      age: +enteredAge,
    };
    props.onAddUser(userData);
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <Card className={styles["form-control"]}>
      <form onSubmit={submitHandler}>
        <label>UserName</label>
        <input type="text" value={enteredName} onChange={nameChangeHandler}></input>
        <label>Age (Years)</label>
        <input type="number" value={enteredAge} onChange={ageChangeHandler}></input>
        <div className={styles["button-area"]}>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;

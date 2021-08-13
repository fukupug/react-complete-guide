import { useState } from "react";

import UserForm from "./component/user-form/UserForm";
import UserList from "./component/user-list/UserList";

import styles from "./App.module.css";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (userData) => {
    const newUser = {
      id: userData.id,
      name: userData.name,
      age: userData.age,
    };
    setUserList((preUsers) => {
      return [newUser, ...preUsers];
    });
  };

  return (
    <div>
      <section id={styles["user-form"]}>
        <UserForm onAddUser={addUserHandler} />
      </section>
      <section id={styles["user-list"]}>
        <UserList users={userList} />
      </section>
    </div>
  );
}

export default App;

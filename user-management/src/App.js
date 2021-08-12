import UserForm from "./component/user-form/UserForm";
import UserList from "./component/user-list/UserList";

import styles from "./App.module.css";

function App() {
  const users = [{ name: "Max", age: 25 }];

  return (
    <div>
      <section id={styles["user-form"]}>
        <UserForm />
      </section>
      <section id={styles["user-list"]}>
        <UserList users={users} />
      </section>
    </div>
  );
}

export default App;

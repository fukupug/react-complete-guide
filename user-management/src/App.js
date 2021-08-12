import UserForm from "./component/user-form/UserForm";

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <section id={styles["user-form"]}>
        <UserForm />
      </section>
    </div>
  );
}

export default App;

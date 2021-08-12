import Card from "../common/Card";
import Button from "../common/Button";
import styles from "./UserForm.module.css";

const UserForm = () => {
  return (
    <Card className={styles["form-control"]}>
      <form>
        <label>UserName</label>
        <input type="text"></input>
        <label>Age (Years)</label>
        <input type="text"></input>
        <div className={styles["button-area"]}>
          <Button>Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;

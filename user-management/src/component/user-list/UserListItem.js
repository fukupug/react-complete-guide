import styles from "./UserListItem.module.css";

const UserListItem = (props) => {
  const user = props.user;
  const content = user.name + " (" + user.age + "years old)";
  return <li className={styles["user-list-item"]}>{content}</li>;
};

export default UserListItem;

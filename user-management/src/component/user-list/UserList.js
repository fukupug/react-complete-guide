import Card from "../common/Card";
import UserListItem from "./UserListItem";

import styles from "./UserList.module.css";

const UserList = (props) => {
  let content = (
    <div className={styles["user-list__fallback"]}>No User Registered.</div>
  );
  if (props.users.length !== 0) {
    const userListItems = props.users.map((user) => {
      return <UserListItem key={user.id} user={user} />;
    });
    content = <ul>{userListItems}</ul>;
  }

  return <Card className={styles["user-list"]}>{content}</Card>;
};

export default UserList;

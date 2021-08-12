import Card from "../common/Card";
import UserListItem from "./UserListItem";

import styles from "./UserList.module.css";

const UserList = (props) => {
  const userListItems = props.users.map((user) => {
    return <UserListItem user={user} />;
  });

  return (
    <Card className={styles["user-list"]}>
      <ul>{userListItems}</ul>
    </Card>
  );
};

export default UserList;

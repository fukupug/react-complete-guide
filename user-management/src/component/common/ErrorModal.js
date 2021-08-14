import { Fragment } from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const BackDrop = (props) => {
  return <div className={styles["backdrop"]} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles["modal"]}>
      <header className={styles["header"]}>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p className={styles["content"]}>{props.message}</p>
      </div>
      <footer className={styles["actions"]}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("backdrop-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;

import React from "react";
import styles from "./dialog.module.css";

const Dialog = (props: any) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>TITLE</h2>
      <input className={styles.input} type="text" />
      <h2 className={styles.title}>URL</h2>
      <input className={styles.input} type="text" />
    </div>
  );
};

export default Dialog;

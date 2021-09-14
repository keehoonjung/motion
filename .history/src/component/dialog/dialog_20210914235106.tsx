import React, { useRef } from "react";
import styles from "./dialog.module.css";

const Dialog = (props: any) => {
  const titleRef:  =
    useRef();
  const urlRef = useRef();

  return (
    <section className={styles.container}>
      <button className={styles.exitbutton}>
        <i className="fas fa-times"></i>
      </button>
      <h2 className={styles.title}>Title</h2>
      <input ref={titleRef} className={styles.input} type="text" />
      <h2 className={styles.title}>Url</h2>
      <input ref={urlRef} className={styles.input} type="text" />
      <button className={styles.addbutton}>Add</button>
    </section>
  );
};

export default Dialog;

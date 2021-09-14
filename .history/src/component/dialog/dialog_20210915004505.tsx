import React, { useRef } from "react";
import { JsxElement } from "typescript";
import styles from "./dialog.module.css";

type DialogProps = {
  type: string;
  setExitCiick: () => void;
};

const Dialog = ({ type, setExitCiick }: DialogProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onClick = () => {
    formRef.current!.reset();
    setExitCiick();
  };

  const onSubmit = () => {
    const item = {
      id: Date.now(),
      type,
    title: {titleRef.current!.value}
    };
  };

  function typeSelector(type: string) {
    if (type === "image" || type === "video") {
      return (
        <>
          <h2 className={styles.title}>Url</h2>
          <input ref={urlRef} className={styles.input} type="text" />
        </>
      );
    } else {
      return (
        <>
          <h2 className={styles.title}>Body</h2>
          <textarea
            ref={textareaRef}
            className={styles.textarea}
            name="area"
            cols={33}
            rows={5}
          ></textarea>
        </>
      );
    }
  }

  return (
    <form ref={formRef} className={styles.container}>
      <button className={styles.exitbutton} onClick={onClick}>
        <i className="fas fa-times"></i>
      </button>
      <h2 className={styles.title}>Title</h2>
      <input ref={titleRef} className={styles.input} type="text" />
      {typeSelector(type)}
      <button className={styles.addbutton} onClick={onSubmit}>
        Add
      </button>
    </form>
  );
};

export default Dialog;

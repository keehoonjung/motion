import React, { useRef } from "react";
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
    };
  };

  return (
    <form ref={formRef} className={styles.container}>
      <button className={styles.exitbutton} onClick={onClick}>
        <i className="fas fa-times"></i>
      </button>
      <h2 className={styles.title}>Title</h2>
      <input ref={titleRef} className={styles.input} type="text" />
      {type === ("image" || "video") ? (
        <>
          <h2 className={styles.title}>Url</h2>
          <input ref={urlRef} className={styles.input} type="text" />
        </>
      ) : (
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
      )}
      <button className={styles.addbutton} onClick={onSubmit}>
        Add
      </button>
    </form>
  );
};

export default Dialog;

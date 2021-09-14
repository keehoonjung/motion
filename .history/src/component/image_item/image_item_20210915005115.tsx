import React from "react";
import styles from "./image_item.module.css";

export type itemProps = {
  item: {
    id: string;
    type: string;
    title: string;
    text: string;
    url: string;
  };
};

const ImageItem = ({ item }: itemProps) => {
  return (
    <li className={styles.container}>
      <img className={styles.img} src={item.url} alt="" />
      <div className={styles.description}>
        <h2 className={styles.title}>{item.title}</h2>
        <p className={styles.memo}> {item.text}</p>
      </div>
      <button className={styles.deletebutton}>
        <i className="fas fa-times"></i>
      </button>
    </li>
  );
};

export default ImageItem;

import React from "react";
import styles from "./image_item.module.css";

type itemProps = {
  item: {
    id: string;
    type: string;
    title: string;
    text: string;
    url: string;
  };
};

const ImageItem = ({ item }) => {
  return (
    <li className={styles.container}>
      <img className={styles.img} src="https://picsum.photos/300/200" alt="" />
      <div className={styles.description}>
        <h2 className={styles.title}>Title</h2>
        <p className={styles.memo}> Hello</p>
      </div>
    </li>
  );
};

export default ImageItem;

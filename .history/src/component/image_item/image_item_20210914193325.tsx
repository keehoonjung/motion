import React from "react";
import styles from "./image_item.module.css";

const ImageItem = (props: any) => {
  return (
    <li className={styles.container}>
      <img className={styles.img} src="https://picsum.photos/300/200" alt="" />
      <div className={styles.description}>
        <h2 className={styles.title}>Title</h2>
        <p> Hello</p>
      </div>
    </li>
  );
};

export default ImageItem;

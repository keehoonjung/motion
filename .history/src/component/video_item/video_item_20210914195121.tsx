import React from "react";
import styles from "./vidoe_item.module.css";

const VideoItem = (props: any) => {
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

export default VideoItem;

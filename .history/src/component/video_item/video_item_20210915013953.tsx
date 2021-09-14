import React from "react";
import { itemProps } from "../item/item";
import styles from "./video_item.module.css";

const VideoItem = ({ item, onDeleteItem }: itemProps) => {
  return (
    <li className={styles.container}>
      <iframe
        width="300"
        height="200"
        src={item.url}
        title="YouTube video player"
      ></iframe>
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

export default VideoItem;

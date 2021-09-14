import React from "react";
import styles from "./video_item.module.css";

type itemProps = {
  item: {
    id: string;
    type: string;
    title: string;
    text: string;
    url: string;
  };
};

const VideoItem = ({ item }: itemProps) => {
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
    </li>
  );
};

export default VideoItem;

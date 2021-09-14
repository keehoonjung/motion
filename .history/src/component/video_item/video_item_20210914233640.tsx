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

const VideoItem = (props: any) => {
  return (
    <li className={styles.container}>
      <iframe
        width="300"
        height="200"
        src="https://www.youtube.com/embed/c9RzZpV460k"
        title="YouTube video player"
      ></iframe>
      <div className={styles.description}>
        <h2 className={styles.title}>Title</h2>
        <p className={styles.memo}> Hello</p>
      </div>
    </li>
  );
};

export default VideoItem;

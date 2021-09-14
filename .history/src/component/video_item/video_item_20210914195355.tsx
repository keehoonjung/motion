import React from "react";
import styles from "./vidoe_item.module.css";

const VideoItem = (props: any) => {
  return (
    <li className={styles.container}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/c9RzZpV460k"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className={styles.description}>
        <h2 className={styles.title}>Title</h2>
        <p className={styles.memo}> Hello</p>
      </div>
    </li>
  );
};

export default VideoItem;

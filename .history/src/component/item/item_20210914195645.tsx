import React from "react";
import ImageItem from "../image_item/image_item";
import VideoItem from "../video_item/video_item";
import styles from "./item.module.css";

const Item = (props: any) => {
  return (
    <ul className={styles.container}>
      <ImageItem />
      <VideoItem />
    </ul>
  );
};

export default Item;

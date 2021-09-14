import React from "react";
import ImageItem from "../image_item/image_item";
import TodoItem from "../todo_item/todo_itme";
import VideoItem from "../video_item/video_item";
import styles from "./item.module.css";

const Item = (props: any) => {
  return (
    <ul className={styles.container}>
      <ImageItem />
      <VideoItem />
      <TodoItem />
    </ul>
  );
};

export default Item;

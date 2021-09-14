import React from "react";
import ImageItem from "../image_item/image_item";
import NoteItem from "../note_item/note_item";
import TodoItem from "../todo_item/todo_itme";
import VideoItem from "../video_item/video_item";
import styles from "./item.module.css";

type itemProps = {
  items: {
    "1": {
      id: "1";
      type: "image";
      title: "Image";
      text: "Hello";
      url: "https://picsum.photos/300/200";
    };
    "2": {
      id: "2";
      type: "video";
      title: "Video";
      text: "Hello";
      url: "https://www.youtube.com/embed/c9RzZpV460k";
    };
    "3": {
      id: "3";
      type: "Note";
      title: "Note";
      text: "Hello";
      url: "";
    };
    "4": {
      id: "4";
      type: "Todo";
      title: "Todo";
      text: "Hello";
      url: "";
    };
  };
};

const Item = ({ items }: itemProps) => {
  return (
    <ul className={styles.container}>
      {Object.keys(items).map((key: string): any => {
        const item = items[key]!;
      })}
      <ImageItem />
      <VideoItem />
      <TodoItem />
      <NoteItem />
    </ul>
  );
};

export default Item;

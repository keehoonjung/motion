import React from "react";
import ImageItem from "../image_item/image_item";
import NoteItem from "../note_item/note_item";
import TodoItem from "../todo_item/todo_itme";
import VideoItem from "../video_item/video_item";
import styles from "./item.module.css";

type item{
    key : {
        id: string;
        type: string;
        title: string;
        text: string;
        url: string;
      }
}

type itemProps = {
  items: {};
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

import React from "react";
import ImageItem from "../image_item/image_item";
import NoteItem from "../note_item/note_item";
import TodoItem from "../todo_item/todo_itme";
import VideoItem from "../video_item/video_item";
import styles from "./item.module.css";

export type itemsProps = {
  items: {
    [key: string]: {
      id: string;
      type: string;
      title: string;
      text: string;
      url: string;
    };
  };
};

const Item = ({ items }: itemsProps) => {
  return (
    <ul className={styles.container}>
      {Object.keys(items).map((key: string): any => {
        const item = items[key];
        switch (item.type) {
          case "image":
            return <ImageItem key={item.id} item={item} />;
          case "video":
            return <VideoItem key={item.id} item={item} />;
          case "note":
            return <NoteItem key={item.id} item={item} />;
          case "todo":
            return <TodoItem key={item.id} item={item} />;
          default:
            throw new Error(`unknown type ${item.type} `);
        }
      })}
    </ul>
  );
};

export default Item;

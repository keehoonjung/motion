import React from "react";
import ImageItem from "../image_item/image_item";
import NoteItem from "../note_item/note_item";
import TodoItem from "../todo_item/todo_itme";
import VideoItem from "../video_item/video_item";
import styles from "./item.module.css";

type itemProps = {
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

const Item = ({ items }: itemProps) => {
  return (
    <ul className={styles.container}>
      {Object.keys(items).map((key: string): any => {
        const item = items[key];
        switch(item.type){
            case "image":
                return <ImageItem item={item}/>
            case "video":
                return <VideoItem item={item}/>
            case "note":
                return <NoteItem item={item}/>
            case "todo":
                return <TodoItem item={item}/>
            default
                throw new Error("not valid type")

        }
      })}
    </ul>
  );
};

export default Item;

import React from "react";
import ImageItem from "../image_item/image_item";
import { ItemState } from "../main/main";
import NoteItem from "../note_item/note_item";
import TodoItem from "../todo_item/todo_itme";
import VideoItem from "../video_item/video_item";
import styles from "./item.module.css";

export type ItemType = {
  id: string | number;
  type: string;
  title: string;
  text: string;
  url: string;
};

export const ItemTypes = {
  ITEM: "item",
};

export type DragItemType = {
  id: string | number;
  index: number;
};

export type itemsProps = {
  items: ItemState;
  onDeleteItem: (item: ItemType) => void;
  moveItem: (dragIndex: number, hoberIndex: number) => void;
};

export type itemProps = {
  card: ItemType;
  index: number;
  onDeleteItem: (item: ItemType) => void;
  moveItem: (dragIndex: number, hoberIndex: number) => void;
};

const Item = ({ items, onDeleteItem, moveItem }: itemsProps) => {
  return (
    <ul className={styles.container}>
      {items.map((item) => {
        console.log(item);
        switch (item.type) {
          case "image":
            console.log("heelo");
            return (
              <ImageItem
                key={item.id}
                card={item}
                index={items.indexOf(item)}
                onDeleteItem={onDeleteItem}
                moveItem={moveItem}
              />
            );
          case "video":
            return (
              <VideoItem
                key={item.id}
                card={item}
                index={items.indexOf(item)}
                onDeleteItem={onDeleteItem}
                moveItem={moveItem}
              />
            );
          case "note":
            return (
              <NoteItem
                key={item.id}
                card={item}
                index={items.indexOf(item)}
                onDeleteItem={onDeleteItem}
                moveItem={moveItem}
              />
            );
          case "todo":
            return (
              <TodoItem
                key={item.id}
                card={item}
                index={items.indexOf(item)}
                onDeleteItem={onDeleteItem}
                moveItem={moveItem}
              />
            );
          default:
            throw new Error(`unknown type ${item.type} `);
        }
      })}
    </ul>
  );
};

export default Item;

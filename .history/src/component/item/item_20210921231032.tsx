import React, { memo } from "react";
import { Droppable } from "react-beautiful-dnd";
import ImageItem from "../image_item/image_item";
import { ColumnType } from "../main/main";
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
  items: { [itemId: string | number]: ItemType };
  column: ColumnType;
  onDeleteItem: (item: ItemType, index: number) => void;
  moveItem: (dragIndex: number, hoberIndex: number) => void;
};

export type itemProps = {
  card: ItemType;
  index: number;
  onDeleteItem: (item: ItemType, index: number) => void;
  moveItem: (dragIndex: number, hoberIndex: number) => void;
};

const Item = memo(({ items, column, onDeleteItem, moveItem }: itemsProps) => {
  return (
    <Droppable droppableId={column.id}>
      <ul className={styles.container}>
        {items &&
          column.itemIds.map((itemId, index) => {
            const item = items[itemId];
            switch (item.type) {
              case "image":
                return (
                  <ImageItem
                    key={item.id}
                    card={item}
                    index={index}
                    onDeleteItem={onDeleteItem}
                    moveItem={moveItem}
                  />
                );
              case "video":
                return (
                  <VideoItem
                    key={item.id}
                    card={item}
                    index={index}
                    onDeleteItem={onDeleteItem}
                    moveItem={moveItem}
                  />
                );
              case "note":
                return (
                  <NoteItem
                    key={item.id}
                    card={item}
                    index={index}
                    onDeleteItem={onDeleteItem}
                    moveItem={moveItem}
                  />
                );
              case "todo":
                return (
                  <TodoItem
                    key={item.id}
                    card={item}
                    index={index}
                    onDeleteItem={onDeleteItem}
                    moveItem={moveItem}
                  />
                );
              default:
                throw new Error(`unknown type ${item.type} `);
            }
          })}
      </ul>
    </Droppable>
  );
});

export default Item;

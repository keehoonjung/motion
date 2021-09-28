import React, { memo } from "react";
import { Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import ImageItem from "../image_item/image_item";
import { ColumnType, InitData } from "../main/main";
import NoteItem from "../note_item/note_item";
import TodoItem from "../todo_item/todo_itme";
import VideoItem from "../video_item/video_item";
import styles from "./item.module.css";

export type ItemType = {
  id: string;
  type: string;
  title: string;
  text: string;
  url: string;
  todolist: string[];
};

export const ItemTypes = {
  ITEM: "item",
};

export type DragItemType = {
  id: string | number;
  index: number;
};

export type itemsProps = {
  data: InitData;
  items: { [itemId: string | number]: ItemType };
  column: ColumnType;
  onDeleteItem: (item: ItemType, index: number) => void;
  onAddTodoItem(item: ItemType, todo: string): void;
  onDeleteTodoItem(item: ItemType, index: number): void;
};

export type itemProps = {
  card: ItemType;
  index: number;
  onDeleteItem: (item: ItemType, index: number) => void;
};

const Item = memo(
  ({
    data,
    items,
    column,
    onDeleteItem,
    onAddTodoItem,
    onDeleteTodoItem,
  }: itemsProps) => {
    return (
      <Droppable droppableId={column.id}>
        {(provided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={styles.container}
          >
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
                      />
                    );
                  case "video":
                    return (
                      <VideoItem
                        key={item.id}
                        card={item}
                        index={index}
                        onDeleteItem={onDeleteItem}
                      />
                    );
                  case "note":
                    return (
                      <NoteItem
                        key={item.id}
                        card={item}
                        index={index}
                        onDeleteItem={onDeleteItem}
                      />
                    );
                  case "todo":
                    return (
                      <TodoItem
                        key={item.id}
                        card={item}
                        index={index}
                        onDeleteItem={onDeleteItem}
                        onAddTodoItem={onAddTodoItem}
                        onDeleteTodoItem={onDeleteTodoItem}
                      />
                    );
                  default:
                    throw new Error(`unknown type ${item.type} `);
                }
              })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    );
  }
);

function mapStateToProps(state: InitData) {
  return {
    Data: state,
  };
}

export default connect(mapStateToProps)(Item);

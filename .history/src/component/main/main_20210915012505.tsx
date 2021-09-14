import React, { useState } from "react";
import Dialog from "../dialog/dialog";
import Header from "../header/header";
import Item, { ItemType } from "../item/item";
import stylse from "./main.module.css";

type ItemState = {
  [key: string | number]: ItemType;
};

const Main = (props: any) => {
  const [items, setItem] = useState<ItemState>({
    "1": {
      id: "1",
      type: "image",
      title: "Image",
      text: "Hello",
      url: "https://picsum.photos/300/200",
    },
    "2": {
      id: "2",
      type: "video",
      title: "Video",
      text: "Hello",
      url: "https://www.youtube.com/embed/c9RzZpV460k",
    },
    "3": {
      id: "3",
      type: "note",
      title: "Note",
      text: "Hello",
      url: "",
    },
    "4": {
      id: "4",
      type: "todo",
      title: "Todo",
      text: "Hello",
      url: "",
    },
  });
  const [onDialog, setOnDialog] = useState(false);
  const [type, setType] = useState("");
  const setOnCilck = (type: string) => {
    setOnDialog(true);
    setType(type);
  };
  const setExitCiick = () => {
    setOnDialog(false);
    setType("");
  };

  const onSubmitItem = (item: ItemType) => {
    setItem((items) => {
      const updated = { ...items };
      updated[item.id] = item;
      return updated;
    });
    setOnDialog(false);
    setType("");
  };

  return (
    <>
      {onDialog && (
        <div className={stylse.background}>
          <Dialog
            type={type}
            onSubmitItem={onSubmitItem}
            setExitCiick={setExitCiick}
          />
        </div>
      )}
      <div className={stylse.container}>
        <Header setOnCilck={setOnCilck} />
        <section className={stylse.item_container}>
          <Item items={items} />
        </section>
        <footer className={stylse.footer}>
          <p>JK Motion</p>
        </footer>
      </div>
    </>
  );
};

export default Main;

import React, { useState } from "react";
import Dialog from "../dialog/dialog";
import Header from "../header/header";
import Item from "../item/item";
import stylse from "./main.module.css";

const Main = (props: any) => {
  const [items, setItem] = useState({
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

  return (
    <>
      {false && (
        <div className={stylse.background}>
          <Dialog />
        </div>
      )}
      <div className={stylse.container}>
        <Header />
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

import React, { useState } from "react";
import Dialog from "../dialog/dialog";
import Header from "../header/header";
import Item from "../item/item";
import stylse from "./main.module.css";

const Main = (props: any) => {
  const [items, setItem] = useState({}
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
          <Item />
        </section>
        <footer className={stylse.footer}>
          <p>JK Motion</p>
        </footer>
      </div>
    </>
  );
};

export default Main;

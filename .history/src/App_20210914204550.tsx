import React from "react";
import stylse from "./app.module.css";
import Dialog from "./component/dialog/dialog";
import Header from "./component/header/header";
import Item from "./component/item/item";

function App() {
  return (
    <div className={stylse.container}>
      <Header />
      <section className={stylse.item_container}>
        <Item />
        <div className={stylse.container}>
          <Header />
          <section className={stylse.item_container}>
            <Item />
          </section>
          <footer className={stylse.footer}>
            <p>JK Motion</p>
          </footer>
        </div>
      </section>
      <footer className={stylse.footer}>
        <p>JK Motion</p>
      </footer>
    </div>
  );
}

export default App;

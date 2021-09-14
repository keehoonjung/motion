import React from "react";
import stylse from "./main.module.css";

const Main = (props) => {
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

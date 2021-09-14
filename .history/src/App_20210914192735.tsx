import React from "react";
import stylse from "./app.module.css";
import Header from "./component/header/header";

function App() {
  return (
    <div className={stylse.container}>
      <Header />
      <section className={stylse.item_container}></section>
      <footer className={stylse.footer}>
        <p>JK Motion</p>
      </footer>
    </div>
  );
}

export default App;

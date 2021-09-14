import React from "react";
import stylse from "./app.module.css";
import Header from "./component/header/header";

function App() {
  return (
    <div className={stylse.container}>
      <Header />
      <section></section>
      <footer>
        <p>JK Motion</p>
      </footer>
    </div>
  );
}

export default App;

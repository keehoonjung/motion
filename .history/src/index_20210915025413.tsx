import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all.js";
import AuthService from "./service/authentication";

const authservice = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App authservice={authservice} />
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { firebaseApp } from "./service/firebase";
import { AuthService } from "./service/auth_service";
import { DataSerivce } from "./service/database";

const authService = new AuthService(firebaseApp);
const dataService = new DataSerivce(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} dataService={dataService} />
  </React.StrictMode>,
  document.getElementById("root")
);

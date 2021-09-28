import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { firebaseApp } from "./service/firebase";
import { AuthService } from "./service/auth_service";
import { DataSerivce } from "./service/database";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import UploadImage from "./service/upload";
import ImageUpload from "./component/image_upload/image_upload";
import "@fortawesome/fontawesome-free/js/all.js";
import { Provider } from "react-redux";
import dataStore from "./store";

const authService = new AuthService(firebaseApp);
const dataService = new DataSerivce(firebaseApp);
const uploadService = new UploadImage();

const FileInput = (props: any) => (
  <ImageUpload {...props} uploadService={uploadService} />
);

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <React.StrictMode>
      <Provider store={dataStore}>
        <App
          FileInput={FileInput}
          authService={authService}
          dataService={dataService}
        />
      </Provider>
    </React.StrictMode>
  </DndProvider>,
  document.getElementById("root")
);

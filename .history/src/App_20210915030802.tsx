import React from "react";
import stylse from "./app.module.css";
import Main from "./component/main/main";
import AuthService from "./service/authentication";
import { BrowserRouter, Switch, Route } from "react-router-dom";

type AppProps = {
  authservice: AuthService;
};

function App({ authservice }: AppProps) {
  return (
    <BrowserRouter>
      <Switch>
        
      <Switch/>
      <Main />
    </BrowserRouter>
  );
}

export default App;

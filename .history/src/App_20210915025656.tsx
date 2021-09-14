import React from "react";
import stylse from "./app.module.css";
import Main from "./component/main/main";
import AuthService from "./service/authentication";

type AppProps = {
  authservice: AuthService;
};

function App({ authservice }: AppProps) {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;

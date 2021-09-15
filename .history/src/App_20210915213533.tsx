import React from "react";
import stylse from "./app.module.css";
import Main from "./component/main/main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./component/login/login";

type AppProps = {
  authService: class name {
    constructor(parameters) {
      
    }
  }
};

function App({ authService }: AppProps) {

  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/", ".home"]} exact>
          <section className={stylse.login_container}>
            <Login authService={authService} />
          </section>
        </Route>
        <Route path="/main">
          <section className={stylse.maker_container}>
            <Main authService={authService} />
          </section>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

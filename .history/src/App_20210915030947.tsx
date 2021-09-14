import React from "react";
import stylse from "./app.module.css";
import Main from "./component/main/main";
import AuthService from "./service/authentication";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./component/login/login";

type AppProps = {
  authservice: AuthService;
};

function App({ authservice }: AppProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/", ".home"]} exact>
          <section className={stylse.login_container}>
            <Login authService={authservice} />
          </section>
        </Route>
        <Route path="/main">
          <section className={stylse.maker_container}>
            <Main authService={authservice} />
          </section>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

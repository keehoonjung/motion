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
        <Route path={["/", ".home"]} exact>
          <section className={styles.login_container}>
            <Login authService={authService} />
          </section>
        </Route>
        <Route path="/main">
          <section className={styles.maker_container}>
            <Maker
              FileInput={FileInput}
              authService={authService}
              databaseService={databaseService}
            />
          </section>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

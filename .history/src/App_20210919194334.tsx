import React from "react";
import stylse from "./app.module.css";
import Main from "./component/main/main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./component/login/login";
import { AuthInterface } from "./service/auth_service";
import { DataInterface } from "./service/database";

type AppProps = {
  FileInput: (props: any) => JSX.Element;
  authService: AuthInterface;
  dataService: DataInterface;
};

function App({ authService, dataService }: AppProps) {
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
            <Main authService={authService} dataService={dataService} />
          </section>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

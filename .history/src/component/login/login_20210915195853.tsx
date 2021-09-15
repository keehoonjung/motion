import React from "react";
import styles from "./login.module.css";
import AuthService from "../../service/authentication";
import { useHistory } from "react-router";

type LoginProps = {
  authService: AuthService;
};

const Login = ({ authService }: LoginProps) => {
  const history = useHistory();
  const goToMain = (userId: string) => {
    history.push({
      pathname: "/main",
      state: { id: userId },
    });
  };
  const onLogin = () => {
    authService //
      .login();
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Motion</h1>
      <button className={styles.button} onClick={onLogin}>
        Google
      </button>
      <button className={styles.button}>Github</button>
      <footer className={styles.footer}>made by JK</footer>
    </section>
  );
};

export default Login;

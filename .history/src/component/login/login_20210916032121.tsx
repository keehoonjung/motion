import React, { useEffect } from "react";
import styles from "./login.module.css";
import { useHistory } from "react-router";
import { AuthInterface } from "../../service/auth_service";
import { User } from "@firebase/auth";

type LoginProps = {
  authService: AuthInterface;
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
      .login("Google")
      .then((data) => goToMain(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMain(user.uid);
    });
  });

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

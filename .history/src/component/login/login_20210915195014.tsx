import React from "react";
import styles from "./login.module.css";
import AuthService from "../../service/authentication";

type LoginProps = {
  authService: AuthService;
};

const Login = ({ authService }: LoginProps) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Motion</h1>
      <button className={styles.button}>Google</button>
      <button className={styles.button}>Github</button>
      <footer className={styles.footer}>made by JK</footer>
    </section>
  );
};

export default Login;

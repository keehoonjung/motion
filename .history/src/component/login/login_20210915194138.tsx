import React from "react";
import AuthService from "../../service/authentication";

type LoginProps = {
  authservice: AuthService;
};

const Login = ({ authService }: LoginProps) => {
  return (
    <>
      <h1>Login</h1>
    </>
  );
};

export default Login;

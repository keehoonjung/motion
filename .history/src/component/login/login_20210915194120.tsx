import React from "react";
import AuthService from "../../service/authentication";

type LoginProps = {
  authservice: AuthService;
};

const Login = ({ authservice }: LoginProps) => {
  return (
    <>
      <h1>Login</h1>
    </>
  );
};

export default Login;

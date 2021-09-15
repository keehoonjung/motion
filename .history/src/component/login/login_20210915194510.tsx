import React from "react";
import AuthService from "../../service/authentication";

type LoginProps = {
  authService: AuthService;
};

const Login = ({ authService }: LoginProps) => {
  return (
    <>
      <h1>Motion</h1>
      <button>Google</button>
      <button>Github</button>
    </>
  );
};

export default Login;

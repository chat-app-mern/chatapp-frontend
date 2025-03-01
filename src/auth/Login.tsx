import React from "react";
import loginImg from "../images/login-img.png";

const Login = () => {
  return (
    <div className="container">
      <div className="auth-heading">Sign Up</div>
      <div className="auth-desc">
        Hello Maurya Soni <span>Full Stack Developer</span>
      </div>
      <img src={loginImg} alt="login-img" />
      <div className="btn btn-primary">Create account</div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
    </div>
  );
};

export default Login;

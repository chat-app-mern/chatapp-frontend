import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import loginImg from "../images/login-img.png";
import Logo from "../images/logo.svg";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: { email: string; password: string }) => {
    console.log("Login Data:", data);
  };

  return (
    <section className="auth-wrap">
      <div className="container">
        <div className="auth-logo">
          <img src={Logo} alt="logo" width={200} height={50} />
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="auth-form">
              <h1 className="auth-heading">Login</h1>
              <p className="auth-desc">
                Login to access your TravelWise account
              </p>

              <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-floating">
                  <input
                    type="text"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="floatingInput"
                    placeholder="Enter email"
                    {...register("email")}
                  />
                  <label htmlFor="floatingInput">Email</label>
                  {errors.email && (
                    <p className="text-danger mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="form-floating">
                  <input
                    type="password"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    id="floatingPassword"
                    placeholder="Enter password"
                    {...register("password")}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                  {errors.password && (
                    <p className="text-danger mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div className="auth-check">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link className="auth-desc" to="/forgotpassword">
                    Forgot Password?
                  </Link>
                </div>

                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>

              <Link className="auth-desc text-center mt-3" to="/register">
                Don't have an account? <span>Sign up</span>
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="auth-img">
              <img height="816" width="616" alt="login-image" src={loginImg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

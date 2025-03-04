import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReactComponent as Logo } from "../images/logo.svg";
import ForgotPasswordImage from "../images/forgot-password-img.png";
import { Link } from "react-router-dom";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});

const ForgotPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit = (values: { email: string }) => {
    console.log(values.email);
    reset();
  };

  return (
    <section className="auth-form-wrapper">
      <div className="container">
        <div className="auth-logo">
        <Logo width={200} height={50} />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="auth-form">
              <h1 className="auth-heading">Forgot your password?</h1>
              <p className="auth-desc">
                Don’t worry, happens to all of us. Enter your email below to
                recover your password
              </p>
              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="123456"
                    {...register("email")}
                  />
                  <label htmlFor="floatingInput">Email</label>
                  {errors.email && (
                    <p className="auth-desc mt-2 text-danger">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-4">
                  Submit
                </button>
              </form>
              <Link className="auth-desc text-center" to="/login">
                <span>Back to Login</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="photo-wrapper">
              <img
                height="816"
                width="616"
                alt="forgot-password-image"
                src={ForgotPasswordImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;

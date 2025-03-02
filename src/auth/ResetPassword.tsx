import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReactComponent as Logo } from "../images/logo.svg";
import ForgotPasswordImage from "../images/forgot-password-img.png";

const validationSchema = yup.object().shape({
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
});
  

const ResetPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit = (values: { password: string }) => {
    console.log(values.password);
    reset();
  };

  return (
    <section className="auth-form-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="auth-form">
              <Logo width={200} height={50} />
              <h1 className="auth-heading">Set a password</h1>
              <p className="auth-desc">
              Your previous password has been reseted. Please set a new password for your account.
              </p>
              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingInput"
                    placeholder="123456"
                    {...register("password")}
                  />
                  <label htmlFor="floatingInput">Enter Password</label>
                  {errors.password && (
                    <p className="auth-desc mt-2 text-danger">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-4">
                Set password
                </button>
              </form>   
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

export default ResetPassword;
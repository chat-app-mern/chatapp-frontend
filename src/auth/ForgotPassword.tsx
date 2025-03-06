import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ForgotPasswordImage from "../images/forgot-password-img.png";
import { Link } from "react-router-dom";
import AuthSection from "../components/AuthSection.tsx";

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
    <AuthSection
      heading="Forgot your password?"
      image={
        <img
          height="816"
          width="616"
          alt="forgot-password-image"
          src={ForgotPasswordImage}
        />
      }
      description="Don’t worry, happens to all of us. Enter your email below to recover your password"
    >
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
            <p className="auth-desc mt-2 text-danger">{errors.email.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-4">
          Submit
        </button>
      </form>
      <Link className="auth-desc text-center" to="/login">
        <span>Back to Login</span>
      </Link>
    </AuthSection>
  );
};
export default ForgotPassword;

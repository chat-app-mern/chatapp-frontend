import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ForgotPasswordImage from "../images/forgot-password-img.png";
import AuthSection from "../components/AuthSection.tsx";

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
    <AuthSection
      heading="Set a password"
      image={
        <img
          height="816"
          width="616"
          alt="forgot-password-image"
          src={ForgotPasswordImage}
        />
      }
      description=" Your previous password has been reseted. Please set a new
                password for your account."
    >
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
    </AuthSection>
  );
};

export default ResetPassword;

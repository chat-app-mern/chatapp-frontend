import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import verifyOtpImage from "../images/login-img.png";
import AuthSection from "../components/AuthSection.tsx";

const validationSchema = yup.object().shape({
  verifyotp: yup
    .string()
    .matches(/^\d{6}$/, "OTP must be a 6-digit number")
    .required("OTP is required"),
});

const VerifyOtp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleFormSubmit = (values: { verifyotp: string }) => {
    console.log(+values.verifyotp);
    reset();
  };

  return (
    <AuthSection
      heading="Verify code"
      description="An authentication code has been sent to your email."
      image={
        <img src={verifyOtpImage} height="816" width="616" alt="verify-image" />
      }
    >
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="123456"
            {...register("verifyotp")}
          />
          <label htmlFor="floatingInput">Enter Code</label>
          {errors.verifyotp && (
            <p className="auth-desc mt-2 text-danger">
              {errors.verifyotp.message}
            </p>
          )}
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-4">
          Verify
        </button>
      </form>
    </AuthSection>
  );
};

export default VerifyOtp;
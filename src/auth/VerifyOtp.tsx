import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import verifyOtpImage from "../images/login-img.png";
import { ReactComponent as Logo } from "../images/logo.svg";

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
    <section className="auth-form-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="auth-form">
              <Logo width={200} height={50} />
              <h1 className="auth-heading">Verify code</h1>
              <p className="auth-desc">
                An authentication code has been sent to your email.
              </p>
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
            </div>
          </div>
          <div className="col-lg-6">
            <div className="photo-wrapper">
              <img
                src={verifyOtpImage}
                height="816"
                width="616"
                alt="verify-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyOtp;

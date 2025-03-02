import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import registerImg from "../images/register-img.png";
import Logo from "../images/logo.svg";

const validationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  terms: yup
    .boolean()
    .oneOf([true], "You must accept the Terms and Privacy Policy"),
});

const Register: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Register Data:", data);
    navigate("/login");
  };

  return (
    <section className="auth-wrap">
      <div className="container">
        <div className="auth-logo">
          <img src={Logo} alt="logo" width={200} height={50} />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="auth-img">
              <img
                height="816"
                width="616"
                alt="register-image"
                src={registerImg}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="auth-form">
              <h1 className="auth-heading">Sign up</h1>
              <p className="auth-desc">
                Let’s get you set up so you can access your account.
              </p>

              <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        {...register("firstName")}
                        placeholder="First Name"
                      />
                      <label>First Name</label>
                      {errors.firstName && (
                        <p className="text-danger">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        {...register("lastName")}
                        placeholder="Last Name"
                      />
                      <label>Last Name</label>
                      {errors.lastName && (
                        <p className="text-danger">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        {...register("email")}
                        placeholder="Email"
                      />
                      <label>Email</label>
                      {errors.email && (
                        <p className="text-danger">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        {...register("phone")}
                        placeholder="Phone Number"
                      />
                      <label>Phone Number</label>
                      {errors.phone && (
                        <p className="text-danger">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    {...register("password")}
                    placeholder="Password"
                  />
                  <label>Password</label>
                  {errors.password && (
                    <p className="text-danger">{errors.password.message}</p>
                  )}
                </div>

                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    {...register("confirmPassword")}
                    placeholder="Confirm Password"
                  />
                  <label>Confirm Password</label>
                  {errors.confirmPassword && (
                    <p className="text-danger">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <div className="auth-check">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      {...register("terms")}
                    />
                    <label className="form-check-label auth-desc">
                      I agree to all the <span>Terms</span> and{" "}
                      <span>Privacy Policy</span>
                    </label>
                    {errors.terms && (
                      <p className="text-danger">{errors.terms.message}</p>
                    )}
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Create account
                </button>
              </form>

              <Link className="auth-desc text-center" to="/login">
                Already have an account? <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;

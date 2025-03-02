import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { apiClient } from "./utils/api.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import Login from "./auth/Login.tsx";
import Register from "./auth/Register.tsx";
import VerifyOtp from "./auth/VerifyOtp.tsx";
import ForgotPassword from "./auth/ForgotPassword.tsx";
import ResetPassword from "./auth/ResetPassword.tsx";

const router = createBrowserRouter([
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/forgotpassword", element: <ForgotPassword/> },
  { path: "/resetpassword", element: <ResetPassword/> },
  { path: "/verifyotp", element: <VerifyOtp/> },
]);

const App: React.FC = () => {
  return (
    <QueryClientProvider client={apiClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;

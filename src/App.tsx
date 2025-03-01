import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { apiClient } from "./utils/api.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import Login from "./auth/Login.tsx";

const router = createBrowserRouter([
  { path: "/register", element: "" },
  { path: "/login", element: <Login /> },
  { path: "/forgot-password", element: "" },
  { path: "/verify-otp", element: "" },
]);

const App: React.FC = () => {
  return (
    <QueryClientProvider client={apiClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;

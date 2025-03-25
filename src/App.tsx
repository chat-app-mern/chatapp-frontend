import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { apiClient } from "./utils/api.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import Login from "./auth/Login.tsx";
import Register from "./auth/Register.tsx";
import VerifyOtp from "./auth/VerifyOtp.tsx";
import ForgotPassword from "./auth/ForgotPassword.tsx";
import ResetPassword from "./auth/ResetPassword.tsx";
import Homepage from "./pages/Homepage.tsx";
import UserRootLayout from "./main layout/UserRootLayout.tsx";
import Detailpage from "./pages/Detailpage.tsx";
import Editprofile from "./pages/Editprofile.tsx";
import AdminRootLayout from "./main layout/AdminRootLayout.tsx";
import Admin from "./pages/Admin.tsx";
import AdminUserDetailPage from "./pages/Admin-UserDetailPage.tsx";
import AdminAddUser from "./pages/Admin-AddUser.tsx";
import AdminEditProfile from "./pages/Admin-EditProfile.tsx";
import AdminUserEditProfile from "./pages/Admin-UserEditProfile.tsx";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminRootLayout />,
    children: [
      { index: true, element: <Admin/> },
      { path: "user/:id" , children:[
         {index: true , element: <AdminUserDetailPage />},
         {path: "edit-profile" ,element: <AdminUserEditProfile/>}
      ] },
      { path: "add-user", element: <AdminAddUser/> },
      { path: "edit-profile", element: <AdminEditProfile/> }
    ],
  },
  {
    path: "/",
    element: <UserRootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "chat/:id", element: <Detailpage /> },
    ],
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/forgotpassword", element: <ForgotPassword /> },
  { path: "/resetpassword", element: <ResetPassword /> },
  { path: "/verifyotp", element: <VerifyOtp /> },
  { path: "/edit-profile", element: <Editprofile /> },
]);

const App: React.FC = () => {
  return (
    <QueryClientProvider client={apiClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;

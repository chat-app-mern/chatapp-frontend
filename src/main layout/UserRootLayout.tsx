import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ReactComponent as Home } from "../images/home-button.svg";
import { ReactComponent as Settings } from "../images/settings-button.svg";
import Header from "../components/Header.tsx";

const UserRootLayout: React.FC = () => {
  return (
    <>
      <Header
        links={
          <>
            <li>
              <NavLink
                aria-label="home"
                to="/"
                className={({ isActive }) => (isActive ? "active" : undefined)}
                end
              >
                <Home width={30} height={30} />
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                end
                aria-label="edit-profile"
                to="/edit-profile"
              >
                <Settings width={30} height={30} />
              </NavLink>
            </li>
          </>
        }
      />
      <Outlet />
    </>
  );
};

export default UserRootLayout;

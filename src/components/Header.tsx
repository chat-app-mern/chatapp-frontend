import React from "react";
import { useState } from "react";
import profilePhoto from "../images/profile-photo-header.png";
import { ReactComponent as Home } from "../images/home-button.svg";
import { ReactComponent as Settings } from "../images/settings-button.svg";
import { ReactComponent as Logo } from "../images/header-logo.svg";
import { ReactComponent as Hamburger } from "../images/hamburger.svg";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [openHeader, setOpenHeader] = useState(false);
  function handleToggle(): void {
    setToggle((prev: boolean) => !prev);
  }
  function handleHeaderToggle(): void {
    setOpenHeader((prev: boolean) => !prev);
  }
  return (
    <div className="header-wrap">
      <header>
        <div className="container">
          <div className="header-content-wrapper">
            <div className="logo">
              <Link aria-label="home" to="/">
                <Logo width={160} height={40} />
              </Link>
            </div>
            <div
              className={`links-wrapper ${openHeader ? "open open-menu" : ""}`}
            >
              <nav>
                <ul>
                  <li>
                    <NavLink
                      aria-label="home"
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "active" : undefined
                      }
                      end
                    >
                      <Home width={30} height={30} />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : undefined
                      }
                      end
                      aria-label="edit-profile"
                      to="/edit-profile"
                    >
                      <Settings width={30} height={30} />
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="profile-photo">
              <button
                className="d-block d-md-none"
                aria-label="open-header-button"
                onClick={handleHeaderToggle}
              >
                <Hamburger width={25} height={25} />
              </button>
              <button onClick={handleToggle}>
                <img
                  src={profilePhoto}
                  alt="profile-photo"
                  width={100}
                  height={60}
                />
              </button>
              {toggle ? (
                <div className="dropdown">
                  <Link aria-label="logout-button" to="/logout">
                    Logout
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

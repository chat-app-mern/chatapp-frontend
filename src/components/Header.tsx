import React from "react";
import { useState } from "react";
import profilePhoto from "../images/profile-photo-header.png";
import { ReactComponent as Logo } from "../images/header-logo.svg";
import { ReactComponent as Hamburger } from "../images/hamburger.svg";
import {Link} from "react-router-dom";

const Header: React.FC<{links:HTMLElement}>= ({links}) => {
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
                <Logo width={160} height={40} />
            </div>
            <div
              className={`links-wrapper ${openHeader ? "open open-menu" : ""}`}
            >
              <nav>
                <ul>
                  {links}
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

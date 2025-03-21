import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../images/arrow-left.svg";
import { ReactComponent as Home } from "../images/home-button.svg";
import mainImage from "../images/profile-photo-header.png";

const Editprofile = () => {
  return (
    <div className="edit-profile-wrap">
      <div className="edit-profile">
        <div className="edit-profile-header">
          <Link to="/">
            <LeftArrow />
          </Link>
          <h2 className="edit-title h3">Edit Profile</h2>
          <Link to="/">
            <Home width={30} height={30} alt="home-img" />
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="edit-profile-content">
          <div className="profile-img">
            <img src={mainImage} alt="main-image" />
            <div className="change-img">
              Change Picture
              <input type="file" name="file" />
            </div>
          </div>

          <form className="profile-form">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingUserName"
                placeholder="Username"
              />
              <label htmlfor="floatingUserName">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlfor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlfor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingPhoneNumber"
                placeholder="Phone Number"
              />
              <label htmlfor="floatingPhoneNumber">Phone Number</label>
            </div>

            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editprofile;

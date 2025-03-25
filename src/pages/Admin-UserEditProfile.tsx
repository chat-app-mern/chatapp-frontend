import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../images/arrow-left.svg";
import { ReactComponent as Home } from "../images/home-button.svg";
import mainImage from "../images/profile-photo-header.png";
import { useNavigate } from "react-router-dom";

const AdminUserEditProfile: React.FC = () => {
  const navigate = useNavigate();
  function handleProfilePage(e:Event){
    e.preventDefault(); 
    navigate(-1);
  }
  const useHideHeader = () => {
    const location = useLocation();
    useEffect(() => {
      const header = document.querySelector(".header-wrap");
      if (header) {
        header.classList.add("hide");
      }
      return () => {
        if (header) {
          header.classList.remove("hide");
        }
      };
    }, [location.pathname]);
  };
  useHideHeader();
  return (
    <div className="edit-profile-wrap">
      <div className="edit-profile">
        <div className="edit-profile-header">
          <Link onClick={handleProfilePage}>
            <LeftArrow />
          </Link>
          <h2 className="edit-title h3">User Profile Edit</h2>
          <Link to="/admin">
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
              <label htmlFor="floatingUserName">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingPhoneNumber"
                placeholder="Phone Number"
              />
              <label htmlFor="floatingPhoneNumber">Phone Number</label>
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

export default AdminUserEditProfile;

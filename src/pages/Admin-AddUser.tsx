import React from "react";

const AdminAddUser: React.FC = () => {
  return (
    <div className="edit-profile-wrap">
      <div className="container">
        <div className="edit-profile-content">
          <h2 className="h2 text-center pt-5 mb-0">Add User</h2>
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
            <select
              class="form-select p-3 mb-3"
              aria-label="Default select example"
            >
              <option selected>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label class="label px-1 mb-2">Add Photo</label>
            <input type="file" class="form-control mb-3" />
            <button type="submit" className="btn btn-primary">
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAddUser;

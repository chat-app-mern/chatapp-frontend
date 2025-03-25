import React from 'react';
import userImage from "../images/profile-photo-header.png"
import { Link } from 'react-router-dom';

const AdminUserDetailPage:React.FC = () => {
  return (
    <section className="user-detail py-3 py-md-5">
    <div className="container">
        <h1 className="h1 text-center pb-3">User Details</h1>
        <div className="user-detail-wrapper">
            <div className="user-image">
                <img src={userImage} alt="user-image" height={277} width={296} />
            </div>
            <div className="user-information">
                <div className="name pb-3">AKINWUMI MICHAEL</div>
                <div className="other pb-3">
                <div className="name">GENDER:</div>
                <div className="value">Male</div>
                </div>
                <div className="other pb-3">
                <div className="name">MAIL:</div>
                <div className="value">demo@gmail.com</div>
                </div>
                <div className="other">
                    <div className="name">
                    PHONE:
                    </div>
                    <div className="value">
                    1010101010
                    </div>
                </div>
            </div>
            <div className="row gx-1 gx-md-3">
                <div className="col-6">
                    <Link to="edit-profile" className="btn btn-primary w-100">Edit Profile</Link>
                </div>
                <div className="col-6">
                <button className="btn btn-primary w-100">Delete User</button>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default AdminUserDetailPage;
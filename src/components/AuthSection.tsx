import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";

const AuthSection: React.FC<{heading:string,description:string,children:HTMLElement,image:HTMLElement}>= ({heading,description,children,image}) => {
  return (
    <section className="auth-form-wrapper">
      <div className="container">
        <div className="auth-logo">
          <Logo width={200} height={50} />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="auth-form">
              <h1 className="auth-heading">{heading}</h1>
              <p className="auth-desc">
                {description}
              </p>
              {children}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="photo-wrapper">
                {image}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;

import React from "react";
import "./topbarstyle.css";
import logo from "../../../static/logo-spt.png";
import { MdWork, MdTextsms, MdArrowDropDown } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="topbar-wrapper-spt">
      <div className="logo-wrapper-spt">
        <img src={logo} alt="" className="logo-box-spt" />
      </div>
      <div className="auth-wrapper-spt">
        <div className="corporate-wrapper-spt">
          <div className="corporate-icon-spt">
            <MdWork />
          </div>
          <div className="corporate-text-spt">
            <p>Corporate LOGIN</p>
          </div>
        </div>
        <div className="signin-wrapper-spt">
          <a href="#">Sign In</a>
          <span>|</span>
          <a href="#">Register</a>
        </div>
        <div className="notification-wrapper-spt">
          <MdTextsms size="2rem" />
        </div>
        <div className="profile-wrapper-spt">
          <div className="profile-button-spt">
            <div className="profile-icon-spt">
              <FaUserCircle color="#ffffff" size="1.5rem" />
            </div>
            <div className="profile-text-spt">
              <p>Guest</p>
              <MdArrowDropDown size="1.5rem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

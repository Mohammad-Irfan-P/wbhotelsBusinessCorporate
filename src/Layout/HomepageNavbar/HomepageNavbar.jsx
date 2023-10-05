import React from "react";
import "./homeNavbar.css";
import Calender from "../../Component/Calender/Calender";
import logo from "../../Media/Wbusiness.png";

const HomepageNavbar = () => {
  return (
    <>
      <div className="homepage-nav-container">
        <div className="homepage-nav-main">
          <div className="homepage-nav-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav-all-content">
            <div className="nav-input-search">
              <input type="text" placeholder="Search hotel" />
            </div>
            <div className="nav-calender">
              <Calender />
            </div>
            <div className="nav-room-guest">Room , Guest</div>
            <div className="nav-booking">Booking for</div>
            <div className="nav-search-btn">
              <button>Search</button>
            </div>
          </div>
          <div>
            <button className="nav-login-logout">Logout</button>
          </div>
        </div>
        </div>
    </>
  );
};

export default HomepageNavbar;

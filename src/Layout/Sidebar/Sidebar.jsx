import React from "react";
import "./sidebar.css";
import { Link, Outlet } from "react-router-dom";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar-main-container">
      <div className="slidebar">
        <div className="dashboard-icon">
          <Link to="/">
            <p>
              <span>
                <DashboardCustomizeOutlinedIcon />
              </span>{" "}
              Dashboard
            </p>
          </Link>
          {/* <a href="/"> <p>Dashboard</p></a> */}
        </div>
        <div>
          <Link to="/bookings">
            <p>
              {" "}
              <span>
                <WorkOutlineIcon />
              </span>{" "}
              Bookings
            </p>
          </Link>
          {/* <a href="/home-page/bookings"><p>Bookings</p></a> */}
        </div>
        <div>
          <a href="/account-statement">
            <p>
              {" "}
              <span>
                <ReceiptLongOutlinedIcon />
              </span>{" "}
              Account Statement
            </p>
          </a>
        </div>
        <div>
          <a href="/employees">
            {" "}
            <p>
              <span>
                <BadgeOutlinedIcon />
              </span>
              Employees
            </p>
          </a>
        </div>
        <div>
          <a href="/settings">
            <p>
              {" "}
              <span>
                <SettingsOutlinedIcon />
              </span>
              Settings
            </p>
          </a>
        </div>
        <div>
          <a href="/approve-booking">
            <p>
              <span>
                <WorkOutlineIcon />
              </span>{" "}
              Approve Bookings
            </p>
          </a>
        </div>
        <div>
          <a href="/business-summary">
            {" "}
            <p>
              <span>
                <MovingOutlinedIcon />
              </span>
              Business Summary
            </p>
          </a>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;

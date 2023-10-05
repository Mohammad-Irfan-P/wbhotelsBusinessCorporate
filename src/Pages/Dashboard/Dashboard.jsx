import React from "react";
import "./dashboard.css";
import Wallet from "../../Component/DashboardComponent/Wallet";
import AmountPayable from "../../Component/DashboardComponent/AmountPayable";
import RecentBooking from "../../Component/DashboardComponent/RecentBooking";
import Table from "../../Component/DashboardComponent/Table";

const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-top-content">
        <h4>Welcome back,{props.name}</h4>
        <button>Booking</button>
      </div>
      <div className="wallet-amountpayable-component">
        <Wallet />
        <AmountPayable />
      </div>
      <RecentBooking />
      <Table />
      <p>For customer support, call at 080480 36907 (24*7)</p>
    </div>
  );
};

export default Dashboard;

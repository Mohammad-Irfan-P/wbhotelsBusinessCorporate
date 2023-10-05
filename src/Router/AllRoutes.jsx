import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Bookings from "../Pages/Bookings/Bookings";
import AccountStatement from "../Pages/AccountStatement/AccountStatement";
import HomepageNavbar from "../Layout/HomepageNavbar/HomepageNavbar";
import Sidebar from "../Layout/Sidebar/Sidebar";
import Employees from "../Pages/Employees/Employees";
import Settings from "../Pages/Settings/Settings";
import ApproveBooking from "../Pages/ApproveBooking/ApproveBooking";
import BusinessSummary from "../Pages/BusinessSummary/BusinessSummary";

const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route  path="/" element={<HomepageNavbar />}/> */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/account-statement" element={<AccountStatement />} />

      <Route path="/employees" element={<Employees />} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/approve-booking" element={<ApproveBooking />} />
      <Route path="/business-summary" element={<BusinessSummary />} />
    </Routes>
  );
};

export default AllRoutes;

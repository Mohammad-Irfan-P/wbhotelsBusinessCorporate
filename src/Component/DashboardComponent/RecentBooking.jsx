import React from "react";
import "./recentBooking.css";

const RecentBooking = () => {
  return (
    <div className="recent-booking-container">
      <div className="recent-booking-main">
        <h4>Recent Bookings</h4>
        <p>
        Last 5 bookings
        </p>
      </div>
      <div className="recent-booking-btn">
        <button>Export Recent Bookings</button>
      </div>
    </div>
  );
};

export default RecentBooking;

import React from "react";
import "./bookings.css";
import BookingsSelect from "../../Component/BookingsComponent/BookingsSelect";

const Bookings = () => {
  return (
    <>
    <div className="bookings-main-container">
        <div>
          <p className="para">Booking Details</p>
        </div>
        <div>
          <input type="text" placeholder="Search by Booking ID" />
        </div>
        <div>
          <button>New Booking</button>
        </div>
      </div>
       <BookingsSelect />
    </>
  );
};

export default Bookings;

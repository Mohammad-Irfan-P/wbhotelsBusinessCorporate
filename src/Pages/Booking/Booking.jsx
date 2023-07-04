// import React from "react";
import "./booking.css";
import React, { useState } from "react";
import help from "../../Media/need-help.svg";
import logo from "../../Media/wblogocircle.png";
import BookingForm from "../../Component/BookingForm/BookingForm";

const Booking = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  const handleToggle = () => {
    setToggle(false);
  };
  return (
    <>
      <div className="full-section">
        <div className="booking-heading">
          <h3>
            Are you an individual business traveller? Book through{" "}
            <span>W B</span> Direct.
          </h3>
        </div>
        <div className="section-form">
          <div className="superAgent-main">
            <div className="title-main-div">
                <div className="title-img-main">
                  <div>  <img src={logo} alt="" /></div>
               
              <div className="jumbo-title">
                W B is a corporate hotel booking solution by WB hotels &
                resorts.
              {/* </div> */}
              {/* <div > */}
               <p className="jumbo-title2"> Built to simplify business stays, and make sure both you and
                your employees always have a good night’s sleep.</p>
              </div>
              </div>
              <button
                className="help row mt-5 need-help-button "
                onClick={() => setToggle(!toggle)}
              >
                <div className=" mt-3 need-help-main need-help-text need-help-click">
                  <div>
                    <img alt="help" src={help}></img>
                  </div>
                  <div className="need-help-text">
                    <div className="need-help">
                      Need help? <br></br>Connect with your dedicated support
                      manager
                    </div>
                  </div>
                </div>
              </button>
            </div>

            <div onClick={handleToggle} className="SuperAgent-Businesswb">
              <BookingForm />
            </div>
          </div>
        </div>

        <div className={toggle ? "" : "toggle-false"}>
          <div className="SuperAgent-notification">
            <p>Start filling your details here!!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;

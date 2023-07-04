import React, { useState } from "react";

import "./innovative.css";
import promise from "../../Media/promise.png";
import more from "../../Media/more.png";
import gst from "../../Media/gst.png";
import city from "../../Media/cityB.png";
import location from "../../Media/locationB.png";
import room from "../../Media/roomB.png";
import savemoney from "../../Media/savemoney.png";
import icontime from "../../Media/icontime.png";
import transparency from "../../Media/transparency.png";
import gstdetails from "../../Media/gstdetails.png";
import invoicedetails from "../../Media/invoicedetails.png";
import dashboard from "../../Media/dashboard.png";
import mobileapp from "../../Media/mobileapp.png";
import callsupport from "../../Media/callsupport.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Innovative = () => {
  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  return (
    <>
      <div>
        <div>
          <div className="innovative-first">
            <h2>
              <span>W B</span> is an innovative offering for corporates by WB
              hotels & resorts, India's largest hospitality company.
            </h2>

            <div className="img-three-main">
              <div>
                <img src={location} alt="location" />
                <p>200+Locations</p>
              </div>
              <div>
                <img src={room} alt="room" />
                <p>45,000+Rooms</p>
              </div>
              <div>
                <img src={city} alt="cities" />
                <p>200+Cities</p>
              </div>
            </div>
          </div>

          {/* wb promise content start here.. */}
          <div className="middle-content-big-img">
            <div className="middle-three">
              <div className="content-text">
                <h1>W B Promises</h1>
                <div className="content-text-second">
                  <div>
                    {" "}
                    <img className="icon-text-img" src={savemoney} alt="" />
                  </div>
                  <div>
                    <strong>Save Cost</strong>
                    <p>
                      Get easy access to 1500+ W B hotels & resorts properties
                      with up to 30% savings, manage all your company bookings
                      on a single portal, and say good-bye to third-party
                      commissions.
                    </p>
                  </div>
                </div>

                <div className="content-text-second">
                  <div>
                    {" "}
                    <img className="icon-text-img" src={icontime} alt="" />
                  </div>
                  <div>
                    <strong>Save Time</strong>
                    <p>
                    Experience the seamless interface of W B and conveniently access all your bookings whenever you require them, right at your fingertips.
                    </p>
                  </div>
                </div>

                <div className="content-text-second">
                  <div>
                    {" "}
                    <img className="icon-text-img" src={transparency} alt="" />
                  </div>
                  <div>
                    <strong>Provide Transparency</strong>
                    <p>
                    Receive invoices directly from us without any manual intervention, ensuring you're always well-informed.
                    </p>
                  </div>
                </div>
              </div>

              <img className="big-img-main" src={promise} alt="" />
            </div>
            {/* we-promise content end here */}

            {/* there is more content start here... */}
            <div className="middle-three">
              <img className="big-img-main" src={more} alt="" />
              <div className="content-text">
                <h1>There's more!</h1>
                <div className="content-text-second">
                  <img
                    className="icon-text-img"
                    src={gstdetails}
                    alt="gstdetails"
                  />

                  <p>Hassle-Free GST</p>
                </div>

                <div className="content-text-second">
                  <img
                    className="icon-text-img"
                    src={invoicedetails}
                    alt="invoicedetails"
                  />

                  <p>Automatic and easy invoices</p>
                </div>


                <div className="content-text-second">
                  <img
                    className="icon-text-img"
                    src={mobileapp}
                    alt="mobileapp"
                  />
                  <p>
                    Mobile app with built-in approval flow and custom budget
                    limits
                  </p>
                </div>

                <div className="content-text-second">
                  <img
                    className="icon-text-img"
                    src={callsupport}
                    alt="callsupport"
                  />

                  <p>Round-the-clock support of W B hotels & resorts</p>
                </div>

                <div className="content-text-second">
                  <img
                    className="icon-text-img"
                    src={dashboard}
                    alt="dashboard"
                  />

                  <p>Dedicated dashboard to track payments</p>
                </div>

              </div>
            </div>
            {/* there is more content end here */}

            <div className="middle-three">
              <div className="para-main-container">
                {/* 1st paragraph */}

                <h1>Hassle-free GST</h1>
                <div className="first-para">
                  <div className="button-h3-div">
                    <button onClick={() => setShow(!show)}>
                      {" "}
                      {show ? (
                        <RemoveIcon style={{ fontSize: "18px" }} />
                      ) : (
                        <AddIcon style={{ fontSize: "18px" }} />
                      )}{" "}
                    </button>{" "}
                    <h3>Claim input credit in every state</h3>
                  </div>
                  {show ? (
                    <div>
                      <p>
                        Under GST. Hotel issue invioces directly to coporates so that you can claim GST accordingly
                        against your GST liability.
                      </p>
                    </div>
                  ) : null}
                </div>

                {/* 2nd paragraph */}
                <div className="first-para">
                  <div className="button-h3-div">
                    <button onClick={() => setShowTwo(!showTwo)}>
                      {" "}
                      {showTwo ? (
                        <RemoveIcon style={{ fontSize: "18px" }} />
                      ) : (
                        <AddIcon style={{ fontSize: "18px" }} />
                      )}{" "}
                    </button>{" "}
                    <h3>Claim input credit for full GST amount</h3>
                  </div>
                  {showTwo ? (
                    <div>
                      <p>
                        Every time you make a fresh booking, you have to go
                        through the process of adding a new vendor to your
                        system. Enter Wb hotels & resorts. We only require
                        one-time registration of vendors and allow one-time
                        payments to be made against a particular corporate code,
                        saving you hours of desk time and more than one headache
                      </p>
                    </div>
                  ) : null}
                </div>

                {/* 3rd paragraph */}
                <div className="first-para">
                  <div className="button-h3-div">
                    <button onClick={() => setShowThree(!showThree)}>
                      {" "}
                      {showThree ? (
                        <RemoveIcon style={{ fontSize: "18px" }} />
                      ) : (
                        <AddIcon style={{ fontSize: "18px" }} />
                      )}{" "}
                    </button>{" "}
                    <h3>One-time Vendor Registration & Payments</h3>
                  </div>
                  {showThree ? (
                    <div>
                      <p>
                        Thanks to GST, every hotel booking now splits into
                        multiple points of contact: the hotel and the travel
                        agent. If there are any questions that need answering,
                        you’ll have to reach out to multiple people. Unless you
                        book through WB hotels & resorts. We give you a single invoice, a single
                        booking ID, and a single person to get in touch for any
                        queries: Your WB hotels & resorts Relationship Manager
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
              <img className="big-img-main" src={gst} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Innovative;

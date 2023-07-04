import React from "react";
import "./upperFooter.css";
import playStore from "../../Media/google_play_badge.png";
import appStore from "../../Media/app_store_badge.png";

const UpperFooter = () => {
  return (
    <>
      <div className="upperFooter-main">
        <div className="app-logo">
          <h4>DOWNLOAD THE APP</h4>
          <div>
            {" "}
            <a href="https://play.google.com/store/apps/details?id=io.wbhotel.com&pli=1">
              {" "}
              <img src={playStore} alt="app link" />
            </a>
            <img src={appStore} alt="app link" />
          </div>
        </div>
        <div className="UpperFooter-link">
          <a href="https://wbhotels.in/about-us">About Us</a>
          <a href="https://wbhotels.in/careers">Careers</a>
          <a href="https://wbhotels.in/support">Support</a>
          <a href="https://wbhotels.in/policy">Privacy Policy</a>
          <a href="https://wbhotels.in/guest-policy">Guest Policy</a>
          <a href="https://wbhotels.in/terms-and-conditions">
            Terms & Conditions
          </a>
        </div>
      </div>

      <div className="queries">
        <p>Have Queries ? Call for any assistance on 080480 36907</p>
      </div>
    </>
  );
};

export default UpperFooter;

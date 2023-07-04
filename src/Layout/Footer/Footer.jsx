import React from "react";
import "./footer.css";
// import InstagramIcon from "@mui/icons-material/Instagram";
import facebookicon from "../../Media/facebookicon.png";
import linkedinicon from "../../Media/linkedinicon.png";
import youtubeicon from "../../Media/youtubeicon.png";
import instaicon from "../../Media/instaicon.png";
import Wbusiness from "../../Media/Wbusiness.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-img-icon">
          <a href="https://www.facebook.com/wbhotelsnresorts">
            <img src={facebookicon} alt="facebookicon" />
          </a>

          <a href="https://www.youtube.com/@wbhotelsresorts5569">
            {" "}
            <img src={youtubeicon} alt="youtubeicon" />
          </a>

          <a href="https://www.linkedin.com/in/wbhotels/">
            {" "}
            <img src={linkedinicon} alt="linkedinicon" />
          </a>

          <a href="https://www.instagram.com/wbhotelsnresorts99/">
            {" "}
            <img src={instaicon} alt="instagram" />
          </a>
          {/* <InstagramIcon /> */}
        </div>
        <div className="footer-logo-middle">
          <img src={Wbusiness} alt="" />
          <p>DELIGHTFUL STAYS</p>

        </div>
        <div className="copyright-footer">
          <p>
            Copyright © 2022,<br></br>
            All Right Reserved WB Hotels & Resorts
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

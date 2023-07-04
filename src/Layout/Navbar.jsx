import React from "react";
import "./navbar.css";
import wbLogo from "../Media/Wbusiness.png"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Navbar = () => {
  return (
    <>
      <div className="nav-corporate-container">
        <div className="nav-corporate">
          <div className="nav-corporate-logo">
            <img src={wbLogo} alt="logo" />
            <div className="corporate-booking"><p>Corporate Booking Solution</p></div>
          </div>
          <div>
            
          </div>
          <div className="left-nav-corporate">
            <div className="nav-phone-num"><CallIcon/> <p>080480 36907</p></div>
            <div className="nav-mail-id"><EmailIcon/><p>booking@wbhotels.in</p></div>
            <div className="nav-login"><p>Login</p></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import "./dashboardComponent.css";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Wallet = () => {
  return (
    <div className="wallet-dashboard-component">
      <div className="wallet-icon">
        {" "}
        <h2>
          <span>
            <AccountBalanceWalletOutlinedIcon style={{fontSize:"35px", marginRight:"10px"}}/>
          </span>
          Privilege Wallet
        </h2>
      </div>
      <div className="wallet-main-content">
        <div className="wallet-balance">
          <h4>0</h4>
          <p>Expirable Balance</p>
        </div>

        <div className="walllet-date">
          <h4>-</h4>
          <p>Expiration Date</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;

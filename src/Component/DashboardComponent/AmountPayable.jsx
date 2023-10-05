import React, { useState } from "react";
import "./dashboardComponent.css";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";

const AmountPayable = () => {
  const [inputAmount, setInputAmount] = useState('');
  const handleClickPay = () =>{
    console.log(typeof (inputAmount))
  }
  return (
    <div className="amount-payable-container">
      <div className="amount-payable-content">
        <h2>
          {" "}
          <WalletOutlinedIcon
            style={{ fontSize: "35px", marginRight: "10px" }}
          />{" "}
          Amount Payable
        </h2>
        <p>0</p>
      </div>
      <div className="input-content-div">
        <input type="text" placeholder="Enter amount" value={inputAmount} onChange={(e)=> setInputAmount(e.target.value)} />
        <button onClick={handleClickPay}>Pay</button>
      </div>
    </div>
  );
};

export default AmountPayable;

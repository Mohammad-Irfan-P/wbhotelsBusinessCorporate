import React from "react";
import "./table.css";
import {tableData} from "./TestTableData"


const Table = () => {
    console.log(tableData)
  return (
    <div className="table-main-container">
    <table>
      <thead>
        <tr>
          <th>BOOKED ON</th>
          <th>PRIMARY GUEST</th>
          <th>BOOKING ID</th>
          <th>HOTEL NAME</th>
          <th>PRICE</th>
          <th>BOOKING STATUS</th>
        </tr>
      </thead>
      <tbody>
        {tableData?.map((item,i)=>{
     return (
        <tr key={i+1}>
            <td>{item?.date}</td>
            <td>{item?.guest_name}</td>
            <td>{item?.booking_id}</td>
            <td>{item?.hotel_name}</td>
            <td>{item?.price}</td>
            <td>{item?.booking_status}</td>
        </tr>
     )
        })}
      </tbody>
    </table>
    </div>
  );
};

export default Table;

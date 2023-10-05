import React, { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";
import HomepageNavbar from "../../Layout/HomepageNavbar/HomepageNavbar";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import AllRoutes from "../../Router/AllRoutes";
import "./homepage.css"

const HomePage = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="container-home">
      <HomepageNavbar />
      <div className="sidebar-allroutes-container">
        <Sidebar />
        {/* <Dashboard name=" irfan"/> */}
        <div className="routes" style={{width:"80%"}}>

        < AllRoutes />
        </div>
      </div>
      {/* <button onClick={handleLogout}>logout</button> */}
    </div>
  );
};

export default HomePage;

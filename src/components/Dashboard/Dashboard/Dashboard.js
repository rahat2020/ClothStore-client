import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import RouteDiv from "../RouteDiv/RouteDiv";
import "./Dashboard.css";
const Dashboard = () => {
  let { url } = useRouteMatch();
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    
  };
  return (
    <div>
      <div class="sidenav">
        <ul>
          <li>
            <Link style={linkStyle} to={`${url}/addReview`}>
              Add Review{" "}
            </Link>
            <br />
            <Link style={linkStyle} to={`${url}/addProducts`}>
              Add Products
            </Link>
            <br />
            <Link style={linkStyle} to={`${url}/manageProducts`}>
              Manage Products
            </Link>
            <br />
            <Link style={linkStyle} to={`${url}/admin`}>
              Admin
            </Link>
          </li>
        </ul>
      </div>

      <div class="main">
        <RouteDiv></RouteDiv>
      </div>
    </div>
  );
};

export default Dashboard;

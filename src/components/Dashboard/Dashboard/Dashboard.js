import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faHome, faComment, faTasks, faUserShield, faListOl} from '@fortawesome/free-solid-svg-icons'
import { Link, useRouteMatch } from "react-router-dom";
import RouteDiv from "../RouteDiv/RouteDiv";
import "./Dashboard.css";
// import Navbar from "../../Navbar/Navbar";
const Dashboard = () => {
  let { url } = useRouteMatch();
  const linkStyle = {
    textDecoration: "none",
    color: "tomato",

  };
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div class="sidenav">
        <ul>
          <li>
            <Link style={linkStyle} to={`${url}/home`}>
              <FontAwesomeIcon icon={faHome} className="side-icon" /> Home{" "}
            </Link>
            <br />
            <Link style={linkStyle} to={`${url}/addReview`}>
              <FontAwesomeIcon icon={faComment} className="side-icon" />  Add Review{" "}
            </Link>
            <br />
            <Link style={linkStyle} to={`${url}/addReview`}>
              <FontAwesomeIcon icon={faListOl} className="side-icon" />  Order List{" "}
            </Link>
            <br />
            <Link style={linkStyle} to={`${url}/addProducts`}>
              <FontAwesomeIcon icon={faPlus} className="side-icon" />  Add Products
            </Link>
            <br />
            <Link style={linkStyle} to={`${url}/manageProducts`}>
              <FontAwesomeIcon icon={faTasks} className="side-icon" /> Manage Products
            </Link>
            <br />
            <Link style={linkStyle} to={`${url}/admin`}>
              <FontAwesomeIcon icon={faUserShield} className="side-icon" /> Admin
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

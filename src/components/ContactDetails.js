import React from "react";
import userImage from "../images/user.png";
import { useLocation } from "react-router-dom";
const ContactDetails = (props) => {
  console.log(props, "props");
  const location = useLocation();
  console.log(location, "location");
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={userImage} alt="user" />
        </div>
        <div className="content">
          <div className="header">ankit</div>
          <div className="description">this is ankit</div>
        </div>
      </div>
    </div>
  );
};
export default ContactDetails;

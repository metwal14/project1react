import React from "react";
import userIcon from "../images/user.png";
const ContactCard = (props) => {
  const { email, name, id } = props;
  return (
    <div className="item">
      <img className="ui avatar image" src={userIcon} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        onClick={() => props?.removeContactHandler(id)}
        style={{ color: "red", marginTop: "7px" }}
        className="trash alternate outline icon"
      ></i>
    </div>
  );
};
export default ContactCard;

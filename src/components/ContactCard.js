import React from "react";
import userIcon from "../images/user.png";
import { Link } from "react-router-dom";
const ContactCard = (props) => {
  const { email, name, id } = props;
  console.log(props, "propsss");
  return (
    <div className="item">
      <img className="ui avatar image" src={userIcon} alt="user" />
      <div className="content">
        <Link to={`/contact/${id}`} state={{ contact: props }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
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

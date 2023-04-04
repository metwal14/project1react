import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList = (props) => {
  const renderContactList = props?.contacts?.map((contact) => {
    return (
      <ContactCard
        key={contact?.id?.toString()}
        email={contact.email}
        name={contact?.name}
        id={contact?.id}
        removeContactHandler={props?.removeContactHandler}
      />
    );
  });
  return (
    <div className="main">
      <h2>ContactList</h2>
      <Link to="/add">
        <button className="ui button blue right">Add Contact</button>
      </Link>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};
export default ContactList;

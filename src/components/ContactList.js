import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const renderContactList = props?.contacts?.map((contact) => {
    return (
      <ContactCard
        key={contact?.id}
        email={contact.email}
        name={contact?.name}
        removeContactHandler={props?.removeContactHandler}
      />
    );
  });
  return <div className="ui celled list">{renderContactList}</div>;
};
export default ContactList;

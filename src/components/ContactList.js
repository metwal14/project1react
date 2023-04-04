import React from "react";
import ContactCard from "./ContactCard";

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
  return <div className="ui celled list">{renderContactList}</div>;
};
export default ContactList;

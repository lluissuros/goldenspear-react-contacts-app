import React from "react";

const ContactsDetails = ({ contact }) => {
  return (
    <div>
      <span>{contact && contact.name}</span>
    </div>
  );
};

export default ContactsDetails;

import React from "react";

const ContactsBrowser = ({
  filteredContacts,
  onSearchInput,
  onLetterClick,
  onPaginationClick
}) => {
  return (
    <div>
      <div>Search Input Here</div>
      <div>Letters list here</div>
      <div>Filtered Clikcable List of Contacts</div>
      <div>Pagination</div>
    </div>
  );
};

export default ContactsBrowser;

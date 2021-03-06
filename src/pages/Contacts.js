import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getContacts } from "../utils/api";
import { getToken } from "../utils/AuthHelperMethods";
import ContactDetails from "../components/ContactDetails";
import ContactsBrowser from "../components/ContactsBrowser";
import { Error } from "../components/StyledComponents";

const Container = styled.div`
  margin: 24px auto;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const LeftItem = styled.div`
  width: 30%;
  min-width: 155px;
  max-width: 250px;
  margin: 0px 6px 0px 6px;
`;

const RightItem = styled.div`
  width: 70%;
  margin: 0px 12px 0px 12px;
`;

const Contacts = props => {
  const [error, setError] = useState(false);
  const [contacts, setContacts] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedContactConnections, setSelectedContactConnections] = useState(
    null
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const contacts = await getContacts(getToken());
        setContacts(contacts);
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
  }, []);

  const handleSelectedContact = contact => {
    setSelectedContact(contact);
    const contactConnectionsIds = new Set(contact.connections);
    const connections = contacts
      .filter(contact => contactConnectionsIds.has(contact.id))
      .sort((a, b) => a.name.localeCompare(b.name));
    setSelectedContactConnections(connections);
  };

  return (
    <div>
      <Container>
        <LeftItem>
          {contacts && (
            <ContactsBrowser
              contacts={contacts}
              onSelectedContact={handleSelectedContact}
            ></ContactsBrowser>
          )}
        </LeftItem>
        <RightItem>
          {selectedContact && (
            <ContactDetails
              contact={selectedContact}
              connections={selectedContactConnections}
            ></ContactDetails>
          )}
        </RightItem>
      </Container>
      {error && (
        <div>
          <Error>{`error message: ${error} `}</Error>
          <Link to="/">Home Page</Link>
        </div>
      )}
    </div>
  );
};

export default Contacts;

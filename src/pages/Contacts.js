import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getUsersMock } from "../utils/api";
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
        const tocken = "MOCK TOCKEN GET IT FROM AUTH";
        const res = await getUsersMock(tocken);
        console.warn("TODO we are providing mock tocken for development");
        setContacts(res.json());
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

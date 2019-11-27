import React, { useState, useEffect } from "react";
import { getUsersMock } from "../utils/api";
import { useAuth } from "../context/auth";
import ContactDetails from "../components/ContactDetails";
import ContactsBrowser from "../components/ContactsBrowser";
import styled from "styled-components";

const Container = styled.div`
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
  const [hasError, setErrors] = useState(false);
  const [contacts, setContacts] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedContactConnections, setSelectedContactConnections] = useState(
    null
  );

  const { authTokens } = useAuth();

  async function fetchData() {
    try {
      //   const res = await getUsersMock(authTokens);
      console.warn("TODO we are providing mock tocken for development");
      const res = await getUsersMock("mock");
      setContacts(res.json());
    } catch (err) {
      setErrors(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectedContact = contact => {
    console.log(contact, "was selected");
    setSelectedContact(contact);
    const contactConnectionsIds = new Set(contact.connections);
    const connections = contacts.filter(contact =>
      contactConnectionsIds.has(contact.id)
    );
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
      {/* <span>Has error: {JSON.stringify(hasError)}</span> */}
    </div>
  );
};

export default Contacts;

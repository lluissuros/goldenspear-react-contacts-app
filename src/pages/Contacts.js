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
`;

const RightItem = styled.div`
  width: 70%;
`;

const Contacts = props => {
  const [hasError, setErrors] = useState(false);
  const [contacts, setContacts] = useState({});
  const { authTokens } = useAuth();

  async function fetchData(authTokens) {
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
    fetchData(authTokens);
  });

  return (
    <div>
      {/* <span>{JSON.stringify(contacts)}</span> */}
      <Container>
        <LeftItem>
          <ContactsBrowser></ContactsBrowser>
        </LeftItem>
        <RightItem>
          <ContactDetails></ContactDetails>
        </RightItem>
      </Container>
      <hr />
      {/* <span>Has error: {JSON.stringify(hasError)}</span> */}
    </div>
  );
};

export default Contacts;

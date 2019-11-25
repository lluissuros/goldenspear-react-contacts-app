import React, { useState, useEffect } from "react";
import { getUsersMock } from "../utils/api";
import { useAuth } from "../context/auth";

const Contacts = props => {
  const [hasError, setErrors] = useState(false);
  const [contacts, setContacts] = useState({});
  const { authTokens } = useAuth();

  async function fetchData(authTokens) {
    try {
      const res = await getUsersMock(authTokens);
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
      <span>{JSON.stringify(contacts)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};

export default Contacts;
